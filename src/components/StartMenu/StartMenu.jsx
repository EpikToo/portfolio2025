import React from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalIcon, AboutIcon, ProjectsIcon, ExperienceIcon } from '../icons/Win98Icons';

const MenuItem = ({ title, onClick, className = "", icon }) => {
    const getIcon = () => {
        if (icon) return icon;

        switch (title) {
            case 'Terminal':
                return <TerminalIcon />;
            case 'À propos':
            case 'About':
                return <AboutIcon />;
            case 'Projets':
            case 'Projects':
                return <ProjectsIcon />;
            case 'Expérience':
            case 'Experience':
                return <ExperienceIcon />;
            default:
                return <TerminalIcon />;
        }
    };

    return (
        <button
            className={`w-full px-2 py-2 flex items-center gap-2 hover:bg-win98-window-title hover:text-white
                text-left text-xs md:text-sm ${className} touch-manipulation`}
            onClick={onClick}
        >
            <div className="flex-shrink-0 w-4 h-4 flex items-center justify-center">
                {getIcon()}
            </div>
            <span className="truncate">{title}</span>
        </button>
    );
};

const CloseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <path d="M2,2 L14,14 M2,14 L14,2" stroke="black" strokeWidth="1.5"/>
    </svg>
);

const StartMenu = ({ isOpen, onClose, windows, onWindowSelect }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleCloseClick = () => {
        const confirmClose = window.confirm(t('menu.confirm_close') || "Are you sure you want to close the portfolio?");
        if (confirmClose) {
            document.body.innerHTML = '<div style="width:100%;height:100vh;display:flex;align-items:center;justify-content:center;font-family:sans-serif;"><h1>Portfolio closed. Refresh page to restart.</h1></div>';
        }
    };

    return (
        <div className="start-menu absolute bottom-[38px] left-1 z-50 w-40 md:w-48 max-h-[calc(100vh-60px)] overflow-auto touch-manipulation">
            <div className="bg-win98-taskbar border-2 border-white shadow-lg">
                <div className="border-2 border-win98-window-border-dark">
                    <div className="flex">
                        <div className="w-4 md:w-6 bg-win98-window-title h-full flex-shrink-0" />

                        <div className="flex-1 bg-win98-button-face">
                            {Object.entries(windows).map(([id, window]) => (
                                <MenuItem
                                    key={id}
                                    title={t(`windows.${id}.title`)}
                                    onClick={() => {
                                        onWindowSelect(id);
                                        onClose();
                                    }}
                                />
                            ))}

                            <div className="my-1 border-t border-win98-window-border-dark border-b border-white" />

                            <MenuItem
                                title={t('menu.close')}
                                className="font-bold"
                                onClick={handleCloseClick}
                                icon={<CloseIcon />}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;