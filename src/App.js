import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Window from './components/Window/Window';
import Terminal from './components/Terminal/Terminal';
import { WindowManagerProvider } from './contexts/WindowManager';

const AppContent = () => {
    const { t } = useTranslation();
    const [windows, setWindows] = useState({
        terminal: true,
        about: false,
    });

    const toggleWindow = (name) => {
        setWindows(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden bg-win98-desktop">
            {/* Zone du bureau */}
            <main className="flex-1 relative">
                {windows.terminal && (
                    <Window
                        title="Terminal"
                        onClose={() => toggleWindow('terminal')}
                        defaultPosition={{ x: 50, y: 50 }}
                    >
                        <Terminal />
                    </Window>
                )}

                {windows.about && (
                    <Window
                        title="À propos"
                        onClose={() => toggleWindow('about')}
                        defaultPosition={{ x: 100, y: 100 }}
                    >
                        <div className="p-4 bg-white">
                            <h2 className="text-lg font-bold mb-2">À propos de moi</h2>
                            <p>Développeur fullstack passionné par le code et les systèmes.</p>
                        </div>
                    </Window>
                )}
            </main>

            {/* Barre des tâches */}
            <div className="h-taskbar bg-win98-taskbar border-t-2 border-white flex items-center px-2">
                <button
                    className="bg-win98-button-face shadow-win98-btn hover:shadow-win98-btn-pressed px-4 py-1 flex items-center gap-2"
                    onClick={() => toggleWindow('about')}
                >
                    <img
                        src="/api/placeholder/16/16"
                        alt="Windows"
                        className="w-4 h-4"
                    />
                    <span className="text-win98-button-text">{t('start')}</span>
                </button>
            </div>
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