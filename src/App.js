import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './win98.css'; // Importation des styles Windows 98 améliorés
import Window from './components/Window/Window';
import Terminal from './components/Terminal/Terminal';
import AboutWindow from './components/AboutWindow/AboutWindow';
import ProjectsWindow from './components/ProjectsWindow/ProjectsWindow';
import ExperienceWindow from './components/ExperienceWindow/ExperienceWindow';
import Taskbar from './components/Taskbar/Taskbar';
import BootAnimation from './components/BootAnimation/BootAnimation';
import { WindowManagerProvider } from './contexts/WindowManager';

const AppContent = () => {
    const { t } = useTranslation();
    const [isBooting, setIsBooting] = useState(true);
    const [windows, setWindows] = useState({
        terminal: {
            isOpen: true,
            isMinimized: true,  // Terminal minimisé par défaut
            isActive: false,
            title: t('windows.terminal.title')
        },
        about: {
            isOpen: true,  // About ouvert par défaut
            isMinimized: false,
            isActive: true,  // About actif par défaut
            title: t('windows.about.title')
        },
        projects: {
            isOpen: true,  // Projects ouvert par défaut
            isMinimized: false,
            isActive: false,
            title: t('windows.projects.title')
        },
        experience: {
            isOpen: false,  // Experience fermé par défaut (pour ne pas surcharger l'interface)
            isMinimized: false,
            isActive: false,
            title: t('windows.experience.title')
        }
    });

    const handleBootComplete = () => {
        setIsBooting(false);
    };

    // Gestion des clics dans la barre des tâches
    const handleTaskbarClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            // Si la fenêtre est minimisée, on la restaure
            if (newWindows[windowId].isMinimized) {
                Object.keys(newWindows).forEach(key => {
                    newWindows[key].isActive = false;
                });

                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isMinimized: false,
                    isActive: true
                };
            }
            // Si la fenêtre est déjà active, on la minimise
            else if (newWindows[windowId].isActive) {
                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isMinimized: true,
                    isActive: false
                };
            }
            // Sinon on l'active simplement
            else {
                Object.keys(newWindows).forEach(key => {
                    newWindows[key].isActive = false;
                });

                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isActive: true
                };
            }

            return newWindows;
        });
    };

    // Gestion des commandes du terminal
    const handleTerminalCommand = (command) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            // On désactive toutes les fenêtres
            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            // On ouvre/active la fenêtre demandée
            if (newWindows[command]) {
                newWindows[command] = {
                    ...newWindows[command],
                    isOpen: true,
                    isMinimized: false,
                    isActive: true
                };
            }

            return newWindows;
        });
    };

    // Gestion spécifique pour le menu démarrer
    const handleStartMenuClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };
            // On désactive toutes les fenêtres
            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            // On force l'ouverture de la fenêtre sélectionnée
            newWindows[windowId] = {
                ...newWindows[windowId],
                isOpen: true,
                isMinimized: false,
                isActive: true
            };

            return newWindows;
        });
    };

    const handleMinimize = (windowId) => {
        setWindows(prev => ({
            ...prev,
            [windowId]: {
                ...prev[windowId],
                isMinimized: true,
                isActive: false
            }
        }));
    };

    const handleClose = (windowId) => {
        setWindows(prev => ({
            ...prev,
            [windowId]: {
                ...prev[windowId],
                isOpen: false,
                isMinimized: false,
                isActive: false
            }
        }));
    };

    if (isBooting) {
        return <BootAnimation onBootComplete={handleBootComplete} />;
    }

    // Calculer des positions décalées pour les fenêtres
    const getWindowPosition = (index) => {
        const baseX = 50;
        const baseY = 50;
        const offsetX = 30;
        const offsetY = 20;

        return {
            x: baseX + (index * offsetX),
            y: baseY + (index * offsetY)
        };
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-win98-desktop cursor-win98-default">
            <main className="flex-1 relative">
                {/* Terminal Window */}
                {windows.terminal.isOpen && (
                    <Window
                        title={t('windows.terminal.title')}
                        onClose={() => handleClose('terminal')}
                        onMinimize={() => handleMinimize('terminal')}
                        isMinimized={windows.terminal.isMinimized}
                        defaultPosition={getWindowPosition(0)}
                        defaultSize={{ width: 600, height: 400 }}
                        className="win98-window"
                    >
                        <Terminal onCommandExecuted={handleTerminalCommand} />
                    </Window>
                )}

                {/* About Window */}
                {windows.about.isOpen && (
                    <Window
                        title={t('windows.about.title')}
                        onClose={() => handleClose('about')}
                        onMinimize={() => handleMinimize('about')}
                        isMinimized={windows.about.isMinimized}
                        defaultPosition={getWindowPosition(1)}
                        defaultSize={{ width: 750, height: 550 }}
                        className="win98-window"
                    >
                        <AboutWindow />
                    </Window>
                )}

                {/* Projects Window */}
                {windows.projects.isOpen && (
                    <Window
                        title={t('windows.projects.title')}
                        onClose={() => handleClose('projects')}
                        onMinimize={() => handleMinimize('projects')}
                        isMinimized={windows.projects.isMinimized}
                        defaultPosition={getWindowPosition(2)}
                        defaultSize={{ width: 700, height: 550 }}
                        className="win98-window"
                    >
                        <ProjectsWindow />
                    </Window>
                )}

                {/* Experience Window */}
                {windows.experience.isOpen && (
                    <Window
                        title={t('windows.experience.title')}
                        onClose={() => handleClose('experience')}
                        onMinimize={() => handleMinimize('experience')}
                        isMinimized={windows.experience.isMinimized}
                        defaultPosition={getWindowPosition(3)}
                        defaultSize={{ width: 700, height: 500 }}
                        className="win98-window"
                    >
                        <ExperienceWindow />
                    </Window>
                )}
            </main>

            <Taskbar
                windows={windows}
                onWindowClick={handleTaskbarClick}
                onStartMenuSelect={handleStartMenuClick}
            />
        </div>
    );
};

function App() {
    return (
        <WindowManagerProvider>
            <AppContent />
        </WindowManagerProvider>
    );
}

export default App;