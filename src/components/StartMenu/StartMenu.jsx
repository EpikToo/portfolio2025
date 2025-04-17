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
            className={`w-full px-1 md:px-2 py-1 flex items-center gap-1 md:gap-2 hover:bg-win98-window-title hover:text-white
                text-left text-xs md:text-sm ${className}`}
            onClick={onClick}
        >
            {getIcon()}
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

    return (
        <div className="start-menu absolute bottom-[38px] left-1 z-50 w-36 md:w-48">
            <div className="bg-win98-taskbar border-2 border-white">
                <div className="border-2 border-win98-window-border-dark">
                    <div className="flex">
                        <div className="w-4 md:w-6 bg-win98-window-title h-full flex-shrink-0" />

                        <div className="flex-1 bg-win98-button-face py-1">
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
                                onClick={() => window.close()}
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