import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import BSOD from '../BSOD/BSOD';
import ApertureEasterEgg from '../ApertureEasterEgg/ApertureEasterEgg';

const Terminal = ({ onCommandExecuted }) => {
    const { t } = useTranslation();
    const [history, setHistory] = useState([t('terminal.welcome')]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [matrixMode, setMatrixMode] = useState(false);
    const [apertureMode, setApertureMode] = useState(false);
    const [matrixStep, setMatrixStep] = useState(0);
    const [showBSOD, setShowBSOD] = useState(false);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    useEffect(() => {
        setHistory([t('terminal.welcome')]);
    }, [t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 530); // ~60bpm, like real terminals

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (matrixMode) {
            const matrixLines = [
                t('terminal.matrix1'),
                t('terminal.matrix2'),
                t('terminal.matrix3'),
                t('terminal.matrix4')
            ];

            const timeout = setTimeout(() => {
                if (matrixStep < matrixLines.length) {
                    setHistory(prev => [...prev, matrixLines[matrixStep]]);
                    setMatrixStep(prev => prev + 1);
                } else {
                    setMatrixMode(false);
                    setMatrixStep(0);

                    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+~`|}{[]\\:;?><,./-=";
                    let randomLines = [];

                    for (let i = 0; i < 10; i++) {
                        let line = "";
                        for (let j = 0; j < 70; j++) {
                            line += characters.charAt(Math.floor(Math.random() * characters.length));
                        }
                        randomLines.push(line);
                    }

                    setTimeout(() => {
                        setHistory(prev => [...prev, ...randomLines]);

                        setTimeout(() => {
                            setShowBSOD(true);
                        }, 500);
                    }, 500);
                }
            }, matrixStep === 0 ? 500 : 1200);

            return () => clearTimeout(timeout);
        }
    }, [matrixMode, matrixStep, t]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (command) => {
        const cmd = command.trim().toLowerCase();

        if (cmd === 'help') {
            return [
                t('terminal.help'),
                ...t('terminal.help_commands', { returnObjects: true })
            ];
        } else if (cmd === 'clear') {
            setHistory([]);
            return [];
        } else if (cmd === 'about') {
            if (onCommandExecuted) {
                onCommandExecuted('about');
            }
            return [t('terminal.about')];
        } else if (cmd === 'projects') {
            if (onCommandExecuted) {
                onCommandExecuted('projects');
            }
            return [`Opening projects window...`];
        } else if (cmd === 'experience') {
            if (onCommandExecuted) {
                onCommandExecuted('experience');
            }
            return [`Opening experience window...`];
        } else if (cmd === 'contact') {
            return [
                t('terminal.contact_info'),
                `Email: ${t('about.floriancontent2')}`,
                `${t('terminal.phone')}: ${t('about.floriancontent3')}`,
                `LinkedIn: https://www.linkedin.com/in/florian-savalle`
            ];
        } else if (cmd === 'skills') {
            return [
                `${t('about.misctitle')}:`,
                t('about.misccontent1'),
                t('about.misccontent2'),
                t('about.misccontent3'),
                t('about.misccontent4'),
                t('about.misccontent5'),
                t('about.misccontent6')
            ];
        } else if (cmd.startsWith('open ')) {
            const windowName = cmd.substring(5).trim();
            if (['about', 'projects', 'experience'].includes(windowName)) {
                if (onCommandExecuted) {
                    onCommandExecuted(windowName);
                }
                return [`Opening ${windowName} window...`];
            } else {
                return [`Window "${windowName}" not found.`];
            }
        } else if (cmd === 'close') {
            return ["To close a window, use the X button in the top-right corner."];
        } else if (cmd === 'matrix') {
            setMatrixMode(true);
            return ["Entering the Matrix..."];
        } else if (cmd === 'aperture') {
            setApertureMode(true);
            return ["Initializing Aperture Science Enrichment Center..."];
        } else if (cmd === 'hello' || cmd === 'hi') {
            return [t('terminal.greeting')];
        } else if (cmd === '') {
            return [];
        } else if (cmd === 'cake') {
            return ["The cake is a lie."];
        } else if (cmd === 'portal') {
            return ["Aperture Science - Portal Testing Initiative. Type 'aperture' to begin."];
        } else {
            return [t('terminal.command_not_found', { command })];
        }
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            if (matrixMode || apertureMode) return;

            setHistory(prev => [...prev, `C:\\> ${currentCommand}`]);

            const results = executeCommand(currentCommand);

            if (results && results.length > 0) {
                setHistory(prev => [...prev, ...results]);
            }

            setCurrentCommand('');
        }
    };

    const handleVirtualInput = (e) => {
        e.preventDefault();
        const terminalEl = terminalRef.current;
        if (terminalEl) {
            inputRef.current?.focus();
        }
    };

    const handleBSODClose = () => {
        setShowBSOD(false);
        setHistory(prev => [...prev, "System rebooted. Type 'help' for commands."]);
    };

    const handleApertureClose = () => {
        setApertureMode(false);
        setHistory(prev => [...prev, "Portal test complete. Thank you for your participation."]);
    };

    return (
        <>
            <div
                ref={terminalRef}
                className="bg-black p-2 md:p-4 font-mono text-xs md:text-sm h-full overflow-y-auto border-2 border-gray-800 relative"
                onClick={handleVirtualInput}
                onTouchStart={handleVirtualInput}
            >
                <div className="mb-2 md:mb-4 text-center text-green-500 font-bold text-xs md:text-sm">
                    <div className="border border-green-500 p-1 md:p-2 inline-block">
                        {t('terminal.header')}
                    </div>
                </div>

                {history.map((line, i) => (
                    <div key={i} className="text-green-500 whitespace-pre-wrap mb-1 text-xs md:text-sm break-all">
                        {line}
                    </div>
                ))}

                {!matrixMode && !apertureMode && (
                    <div className="text-green-500 flex text-xs md:text-sm break-all">
                        <span>C:\&gt;&nbsp;</span>
                        <span>{currentCommand}</span>
                        <span
                            className={`w-1.5 md:w-2 ml-0.5 h-4 md:h-5 ${cursorVisible ? 'bg-green-500' : 'bg-transparent'}`}
                        >
                            &nbsp;
                        </span>
                    </div>
                )}

                <input
                    ref={inputRef}
                    type="text"
                    className="opacity-0 absolute w-0 h-0"
                    value={currentCommand}
                    onChange={(e) => setCurrentCommand(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                />

                <div className="fixed bottom-1 right-1 md:hidden bg-black bg-opacity-70 text-green-500 text-xs p-1 rounded">
                    Tap screen to type
                </div>
            </div>

            {showBSOD && <BSOD onClose={handleBSODClose} />}
            {apertureMode && <ApertureEasterEgg onClose={handleApertureClose} />}
        </>
    );
};

export default Terminal;