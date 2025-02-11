import React, { createContext, useContext, useState, useCallback } from 'react';

const WindowManagerContext = createContext(null);

export const WindowManagerProvider = ({ children }) => {
    const [windows, setWindows] = useState([]); // Liste des fenêtres avec leur z-index
    const [nextZIndex, setNextZIndex] = useState(100); // Z-index de base pour les nouvelles fenêtres

    const registerWindow = useCallback((id) => {
        setWindows(prev => [...prev, { id, zIndex: nextZIndex }]);
        setNextZIndex(prev => prev + 1);
        return nextZIndex;
    }, [nextZIndex]);

    const unregisterWindow = useCallback((id) => {
        setWindows(prev => prev.filter(w => w.id !== id));
    }, []);

    const bringToFront = useCallback((id) => {
        setWindows(prev => {
            const newWindows = prev.filter(w => w.id !== id);
            setNextZIndex(prev => prev + 1);
            return [...newWindows, { id, zIndex: nextZIndex }];
        });
        return nextZIndex;
    }, [nextZIndex]);

    return (
        <WindowManagerContext.Provider value={{
            registerWindow,
            unregisterWindow,
            bringToFront
        }}>
            {children}
        </WindowManagerContext.Provider>
    );
};

export const useWindowManager = () => {
    const context = useContext(WindowManagerContext);
    if (!context) {
        throw new Error('useWindowManager doit être utilisé dans un WindowManagerProvider');
    }
    return context;
};