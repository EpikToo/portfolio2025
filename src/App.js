import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Window from './components/Window/Window';
import Terminal from './components/Terminal/Terminal';
import Taskbar from './components/Taskbar/Taskbar';
import { WindowManagerProvider } from './contexts/WindowManager';

const AppContent = () => {
    const { t } = useTranslation();
    const [windows, setWindows] = useState({
        terminal: {
            isOpen: true,
            isMinimized: false,
            isActive: true,
            title: 'Terminal'
        },
        about: {
            isOpen: false,
            isMinimized: false,
            isActive: false,
            title: 'À propos'
        }
    });

    // Gestion des clics dans la barre des tâches
    const handleTaskbarClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };
            // D'abord, on désactive toutes les fenêtres
            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            // Puis on restaure la fenêtre cliquée
            newWindows[windowId] = {
                ...newWindows[windowId],
                isMinimized: false,
                isActive: true
            };

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

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-win98-desktop">
            <main className="flex-1 relative">
                {windows.terminal.isOpen && (
                    <Window
                        title="Terminal"
                        onClose={() => handleClose('terminal')}
                        onMinimize={() => handleMinimize('terminal')}
                        isMinimized={windows.terminal.isMinimized}
                        defaultPosition={{ x: 50, y: 50 }}
                    >
                        <Terminal />
                    </Window>
                )}

                {windows.about.isOpen && (
                    <Window
                        title="À propos"
                        onClose={() => handleClose('about')}
                        onMinimize={() => handleMinimize('about')}
                        isMinimized={windows.about.isMinimized}
                        defaultPosition={{ x: 100, y: 100 }}
                    >
                        <div className="p-4 bg-white">
                            <h2 className="text-lg font-bold mb-2">À propos de moi</h2>
                            <p>Développeur fullstack passionné par le code et les systèmes.</p>
                        </div>
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