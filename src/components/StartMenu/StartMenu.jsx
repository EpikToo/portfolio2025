import React from 'react';
import { TerminalIcon, AboutIcon } from '../icons/Win98Icons';

const MenuItem = ({ title, onClick, className = "" }) => {
    const getIcon = () => {
        switch (title) {
            case 'Terminal':
                return <TerminalIcon />;
            case 'À propos':
                return <AboutIcon />;
            default:
                return <TerminalIcon />;
        }
    };

    return (
        <button
            className={`w-full px-2 py-1 flex items-center gap-2 hover:bg-win98-window-title hover:text-white
                text-left text-sm ${className}`}
            onClick={onClick}
        >
            {getIcon()}
            <span>{title}</span>
        </button>
    );
};

const StartMenu = ({ isOpen, onClose, windows, onWindowSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="start-menu absolute bottom-[38px] left-1 z-50 w-48">
            <div className="bg-win98-taskbar border-2 border-white">
                <div className="border-2 border-win98-window-border-dark">
                    <div className="flex">
                        <div className="w-6 bg-win98-window-title h-full flex-shrink-0" />

                        <div className="flex-1 bg-win98-button-face py-1">
                            {Object.entries(windows).map(([id, window]) => (
                                <MenuItem
                                    key={id}
                                    title={window.title}
                                    onClick={() => {
                                        onWindowSelect(id);
                                        onClose();
                                    }}
                                />
                            ))}

                            <div className="my-1 border-t border-win98-window-border-dark border-b border-white" />

                            <MenuItem
                                title="Fermer"
                                className="font-bold"
                                onClick={() => window.close()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;