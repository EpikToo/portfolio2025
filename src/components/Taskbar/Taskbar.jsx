import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import StartMenu from '../StartMenu/StartMenu';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Win98Tooltip from '../Win98ToolTip/Win98Tooltip';
import { StartIcon, TerminalIcon, AboutIcon, ProjectsIcon, ExperienceIcon } from '../icons/Win98Icons';

const WindowButton = ({ title, isActive, isMinimized, onClick }) => {
    const getIcon = () => {
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
            className={`h-[30px] px-1 md:px-2 flex items-center gap-1 md:gap-2 min-w-[90px] max-w-[150px] md:min-w-[150px] md:max-w-[200px]
                ${isActive
                ? 'shadow-win98-btn-pressed bg-win98-button-face'
                : isMinimized
                    ? 'shadow-win98-btn bg-win98-button-face'
                    : 'shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face'
            }`}
            onClick={onClick}
        >
            {getIcon()}
            <span className="truncate text-xs md:text-sm">{title}</span>
        </button>
    );
};

const SystemTray = () => {
    const [time, setTime] = useState(new Date());
    const [showLangTooltip, setShowLangTooltip] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center h-[30px] gap-1 md:gap-2 px-1 md:px-2 shadow-win98-btn bg-win98-button-face">
            <div className="relative">
                <LanguageSelector />
                {showLangTooltip && (
                    <Win98Tooltip
                        text={t('tooltips.language')}
                        position="top"
                        delay={1000}
                        autoClose={5000}
                        onClose={() => setShowLangTooltip(false)}
                    />
                )}
            </div>
            <div className="w-px h-[24px] mx-0.5 md:mx-1 border-l border-win98-window-border-dark border-r border-white" />
            <span className="text-xs md:text-sm font-medium">
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
        </div>
    );
};

const Taskbar = ({ windows, onWindowClick, onStartMenuSelect }) => {
    const { t } = useTranslation();
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [showStartTooltip, setShowStartTooltip] = useState(true);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isStartMenuOpen && !e.target.closest('.start-menu') && !e.target.closest('.start-button')) {
                setIsStartMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isStartMenuOpen]);

    return (
        <>
            <div className="h-taskbar bg-win98-taskbar flex items-center p-0.5 md:p-1 gap-0.5 md:gap-1 border-t-2 border-white relative">
                <div className="relative">
                    <button
                        className={`start-button h-[30px] px-1 md:px-2 flex items-center gap-1 md:gap-2 font-bold bg-win98-button-face
                            ${isStartMenuOpen ? 'shadow-win98-btn-pressed' : 'shadow-win98-btn hover:shadow-win98-btn-pressed'}`}
                        onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
                    >
                        <StartIcon />
                        <span className="text-win98-button-text text-xs md:text-sm">{t('start')}</span>
                    </button>
                    {showStartTooltip && (
                        <Win98Tooltip
                            text={t('tooltips.start')}
                            position="top"
                            delay={500}
                            autoClose={5000}
                            onClose={() => setShowStartTooltip(false)}
                        />
                    )}
                </div>

                <div className="w-px h-[30px] mx-0.5 md:mx-1 border-l border-win98-window-border-dark border-r border-white" />

                <div className="flex-1 flex gap-0.5 md:gap-1 items-center overflow-x-auto">
                    {Object.entries(windows).map(([id, window]) =>
                            window.isOpen && (
                                <WindowButton
                                    key={id}
                                    title={t(`windows.${id}.title`)}
                                    isActive={window.isActive}
                                    isMinimized={window.isMinimized}
                                    onClick={() => onWindowClick(id)}
                                />
                            )
                    )}
                </div>

                <SystemTray />
            </div>

            <StartMenu
                isOpen={isStartMenuOpen}
                onClose={() => setIsStartMenuOpen(false)}
                windows={windows}
                onWindowSelect={(windowId) => {
                    onStartMenuSelect(windowId);
                    setIsStartMenuOpen(false);
                }}
            />
        </>
    );
};

export default Taskbar;