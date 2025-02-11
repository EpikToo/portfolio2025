import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState(['Bienvenue sur mon portfolio']);
    const [currentCommand, setCurrentCommand] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const inputRef = useRef(null);

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

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            // On ajoute la commande à l'historique
            setHistory(prev => [...prev, `C:\\> ${currentCommand}`]);

            // Simulation basique de réponses
            if (currentCommand.toLowerCase() === 'help') {
                setHistory(prev => [...prev, 'Commandes disponibles:', '  help - Affiche cette aide', '  clear - Efface l\'écran', '  about - À propos de moi']);
            } else if (currentCommand.toLowerCase() === 'clear') {
                setHistory([]);
            } else if (currentCommand.toLowerCase() === 'about') {
                setHistory(prev => [...prev, 'Développeur fullstack passionné par le backend et les systèmes distribués']);
            } else if (currentCommand.trim() !== '') {
                setHistory(prev => [...prev, `Commande non reconnue: ${currentCommand}`]);
            }

            setCurrentCommand('');
        }
    };

    return (
        <div
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