import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Matrix from '../Matrix/Matrix';

const Terminal = ({ onCommandExecuted }) => {
    const { t } = useTranslation();
    const [history, setHistory] = useState([t('terminal.welcome')]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [showMatrix, setShowMatrix] = useState(false);
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
                t('about.misccontent4')
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
            setShowMatrix(true);
            return [];
        } else if (cmd === 'hello' || cmd === 'hi') {
            return [t('terminal.greeting')];
        } else if (cmd === '') {
            return [];
        } else {
            return [t('terminal.command_not_found', { command })];
        }
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            setHistory(prev => [...prev, `C:\\> ${currentCommand}`]);

            const results = executeCommand(currentCommand);

            if (results && results.length > 0) {
                setHistory(prev => [...prev, ...results]);
            }

            setCurrentCommand('');
        }
    };

    if (showMatrix) {
        return <Matrix onClose={() => setShowMatrix(false)} />;
    }

    return (
        <div
            ref={terminalRef}
            className="bg-black p-2 md:p-4 font-mono text-xs md:text-sm h-full overflow-y-auto border-2 border-gray-800"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="mb-3 md:mb-4 text-center text-green-500 font-bold text-xs md:text-sm">
                <div className="border border-green-500 p-1 md:p-2 inline-block">
                    {t('terminal.header')}
                </div>
            </div>

            {history.map((line, i) => (
                <div key={i} className="text-green-500 whitespace-pre-wrap mb-1 text-xs md:text-sm break-all">
                    {line}
                </div>
            ))}

            <div className="text-green-500 flex text-xs md:text-sm break-all">
                <span>C:\&gt;&nbsp;</span>
                <span>{currentCommand}</span>
                <span
                    className={`w-1.5 md:w-2 ml-0.5 h-4 md:h-5 ${cursorVisible ? 'bg-green-500' : 'bg-transparent'}`}
                >
                    &nbsp;
                </span>
            </div>

            <input
                ref={inputRef}
                type="text"
                className="opacity-0 absolute w-0 h-0"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleCommand}
                autoFocus
            />
        </div>
    );
};

export default Terminal;