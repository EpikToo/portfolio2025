import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Terminal = ({ onCommandExecuted }) => {
    const { t } = useTranslation();
    const [history, setHistory] = useState([t('terminal.welcome')]);
    const [currentCommand, setCurrentCommand] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const inputRef = useRef(null);
    const terminalRef = useRef(null);

    // Reset l'historique quand la langue change
    useEffect(() => {
        setHistory([t('terminal.welcome')]);
    }, [t]);

    // Effet pour le clignotement du curseur
    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible(v => !v);
        }, 530); // ~60bpm, comme les vrais terminaux

        return () => clearInterval(interval);
    }, []);

    // Focus automatique sur le terminal
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Auto-scroll au bas du terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    const executeCommand = (command) => {
        // Handle command logic here
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
                "Contact information:",
                "Email: florian.savalle@viacesi.fr",
                "Phone: +33 6.05.84.52.09",
                "LinkedIn: https://www.linkedin.com/in/florian-savalle"
            ];
        } else if (cmd === 'skills') {
            return [
                "Skills:",
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
        } else if (cmd === '') {
            return [];
        } else {
            return [t('terminal.command_not_found', { command })];
        }
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            // On ajoute la commande à l'historique
            setHistory(prev => [...prev, `C:\\> ${currentCommand}`]);

            // Exécuter la commande et obtenir les résultats
            const results = executeCommand(currentCommand);

            // Ajouter les résultats à l'historique
            if (results && results.length > 0) {
                setHistory(prev => [...prev, ...results]);
            }

            setCurrentCommand('');
        }
    };

    return (
        <div
            ref={terminalRef}
            className="bg-black p-4 font-mono text-sm h-full overflow-y-auto"
            onClick={() => inputRef.current?.focus()}
        >
            {/* Historique des commandes */}
            {history.map((line, i) => (
                <div key={i} className="text-green-500 whitespace-pre-wrap mb-1">
                    {line}
                </div>
            ))}

            {/* Ligne de commande active */}
            <div className="text-green-500 flex">
                <span>C:\&gt;&nbsp;</span>
                <span>{currentCommand}</span>
                <span
                    className={`w-2 ml-0.5 ${cursorVisible ? 'bg-green-500' : 'bg-transparent'}`}
                >
                    &nbsp;
                </span>
            </div>

            {/* Input caché pour la saisie */}
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