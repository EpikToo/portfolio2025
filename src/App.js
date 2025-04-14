import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './win98.css'; // Import improved Windows 98 styles
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
            isMinimized: true,  // Terminal minimized by default
            isActive: false,
            title: t('windows.terminal.title')
        },
        about: {
            isOpen: true,  // About opened by default
            isMinimized: false,
            isActive: true,  // About active by default
            title: t('windows.about.title')
        },
        projects: {
            isOpen: true,  // Projects opened by default
            isMinimized: false,
            isActive: false,
            title: t('windows.projects.title')
        },
        experience: {
            isOpen: false,  // Experience closed by default (to avoid cluttering the interface)
            isMinimized: false,
            isActive: false,
            title: t('windows.experience.title')
        }
    });

    const handleBootComplete = () => {
        setIsBooting(false);
    };

    // Handle clicks in the taskbar
    const handleTaskbarClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            // If the window is minimized, restore it
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
            // If the window is already active, minimize it
            else if (newWindows[windowId].isActive) {
                newWindows[windowId] = {
                    ...newWindows[windowId],
                    isMinimized: true,
                    isActive: false
                };
            }
            // Otherwise, simply activate it
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

    // Handle terminal commands
    const handleTerminalCommand = (command) => {
        setWindows(prev => {
            const newWindows = { ...prev };

            // Deactivate all windows
            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            // Open/activate the requested window
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

    // Specific handling for the Start menu
    const handleStartMenuClick = (windowId) => {
        setWindows(prev => {
            const newWindows = { ...prev };
            // Deactivate all windows
            Object.keys(newWindows).forEach(key => {
                newWindows[key].isActive = false;
            });

            // Force the opening of the selected window
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

    // Calculate positions for each window
    const getWindowPosition = (index) => {
        // Predefined positions for each window type
        const positions = [
            { x: 50, y: 50 },    // Terminal
            { x: 120, y: 40 },   // About
            { x: 180, y: 100 },  // Projects
            { x: 80, y: 120 }    // Experience
        ];

        // If index is in the array, return its predefined position
        if (index < positions.length) {
            return positions[index];
        }

        // Otherwise, calculate a random position but not too close to the edges
        const randomX = Math.floor(Math.random() * 200) + 50;
        const randomY = Math.floor(Math.random() * 150) + 50;

        return { x: randomX, y: randomY };
    };

    if (isBooting) {
        return <BootAnimation onBootComplete={handleBootComplete} />;
    }

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