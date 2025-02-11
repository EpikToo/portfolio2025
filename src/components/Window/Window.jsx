import React, { useState, useEffect, useRef, useId } from 'react';
import { useWindowManager } from '../../contexts/WindowManager';
import { WindowControls } from '../icons/Win98Icons';

const Window = ({
                    title = "Window",
                    children,
                    onClose,
                    onMinimize,
                    isMinimized = false,
                    defaultPosition = { x: 100, y: 100 },
                    defaultSize = { width: 400, height: 300 },
                    className = ""
                }) => {
    const windowId = useId();
    const { registerWindow, unregisterWindow, bringToFront } = useWindowManager();
    const [zIndex, setZIndex] = useState(0);
    const [position, setPosition] = useState(defaultPosition);
    const [size, setSize] = useState(defaultSize);
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [resizeDirection, setResizeDirection] = useState(null);
    const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [isMaximized, setIsMaximized] = useState(false);
    const [preMaximizeState, setPreMaximizeState] = useState(null);
    const windowRef = useRef(null);

    useEffect(() => {
        const initialZIndex = registerWindow(windowId);
        setZIndex(initialZIndex);
        return () => unregisterWindow(windowId);
    }, []);

    // Fonctions pour la gestion de la fenêtre
    const saveCurrentState = () => ({
        position: { ...position },
        size: { ...size }
    });

    const toggleMaximize = () => {
        if (!isMaximized) {
            setPreMaximizeState(saveCurrentState());
            const parent = windowRef.current.parentElement;
            setPosition({ x: 0, y: 0 });
            setSize({
                width: parent.clientWidth,
                height: parent.clientHeight - 40
            });
        } else {
            setPosition(preMaximizeState.position);
            setSize(preMaximizeState.size);
        }
        setIsMaximized(!isMaximized);
    };

    const handleWindowClick = (e) => {
        e.stopPropagation();
        const newZIndex = bringToFront(windowId);
        setZIndex(newZIndex);
    };

    const handleTitleBarDoubleClick = (e) => {
        e.preventDefault();
        toggleMaximize();
    };

    // Gestion du drag & drop
    const handleMouseDown = (e) => {
        if (isMaximized) return;
        if (e.target.closest('.resize-handle')) return;
        if (!e.target.closest('.window-title-bar')) return;

        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setIsDragging(true);
    };

    const handleResizeStart = (e, direction) => {
        if (isMaximized) return;
        e.stopPropagation();
        const rect = windowRef.current.getBoundingClientRect();
        setResizeStart({
            x: e.clientX,
            y: e.clientY,
            width: rect.width,
            height: rect.height
        });
        setResizeDirection(direction);
        setIsResizing(true);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const parentRect = windowRef.current.parentElement.getBoundingClientRect();
            const windowRect = windowRef.current.getBoundingClientRect();

            let newX = e.clientX - dragOffset.x;
            let newY = e.clientY - dragOffset.y;

            newX = Math.max(0, Math.min(newX, parentRect.width - windowRect.width));
            newY = Math.max(0, Math.min(newY, parentRect.height - windowRect.height));

            setPosition({ x: newX, y: newY });
        }

        if (isResizing && resizeDirection) {
            const deltaX = e.clientX - resizeStart.x;
            const deltaY = e.clientY - resizeStart.y;
            const parentRect = windowRef.current.parentElement.getBoundingClientRect();

            let newWidth = resizeStart.width;
            let newHeight = resizeStart.height;
            let newX = position.x;
            let newY = position.y;

            if (resizeDirection.includes('e')) {
                newWidth = Math.max(200, Math.min(
                    resizeStart.width + deltaX,
                    parentRect.width - position.x
                ));
            }
            if (resizeDirection.includes('s')) {
                newHeight = Math.max(150, Math.min(
                    resizeStart.height + deltaY,
                    parentRect.height - position.y
                ));
            }
            if (resizeDirection.includes('w')) {
                const possibleWidth = resizeStart.width - deltaX;
                if (possibleWidth >= 200) {
                    newWidth = possibleWidth;
                    newX = Math.min(
                        position.x + deltaX,
                        position.x + size.width - 200
                    );
                }
            }
            if (resizeDirection.includes('n')) {
                const possibleHeight = resizeStart.height - deltaY;
                if (possibleHeight >= 150) {
                    newHeight = possibleHeight;
                    newY = Math.min(
                        position.y + deltaY,
                        position.y + size.height - 150
                    );
                }
            }

            setSize({ width: newWidth, height: newHeight });
            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsResizing(false);
        setResizeDirection(null);
    };

    useEffect(() => {
        if (isDragging || isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, isResizing]);

    if (isMinimized) {
        return null;
    }

    return (
        <div
            ref={windowRef}
            className={`absolute flex flex-col ${className} ${isMaximized ? 'transition-all duration-150' : 'animate-window-open'}`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${size.width}px`,
                height: `${size.height}px`,
                cursor: isDragging ? 'grabbing' : 'default',
                zIndex: zIndex
            }}
            onMouseDown={handleWindowClick}
        >
            <div className="bg-win98-button-face border-2 border-white h-full">
                <div className="border-2 border-win98-window-border-dark h-full flex flex-col">
                    {/* Barre de titre */}
                    <div
                        className="window-title-bar bg-win98-window-title px-2 py-1 flex justify-between items-center cursor-grab select-none"
                        onMouseDown={handleMouseDown}
                        onDoubleClick={handleTitleBarDoubleClick}
                    >
                        <span className="text-win98-window-title-text font-bold text-sm">
                            {title}
                        </span>
                        {/* Boutons de contrôle */}
                        <div className="flex gap-1">
                            <button
                                className="min-w-[20px] h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={onMinimize}
                            >
                                <WindowControls.Minimize />
                            </button>
                            <button
                                className="min-w-[20px] h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={toggleMaximize}
                            >
                                <WindowControls.Maximize />
                            </button>
                            <button
                                className="min-w-[20px] h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={onClose}
                            >
                                <WindowControls.Close />
                            </button>
                        </div>
                    </div>

                    {/* Contenu de la fenêtre */}
                    <div className="flex-1 relative">
                        {children}
                    </div>

                    {/* Poignées de redimensionnement */}
                    {!isMaximized && (
                        <>
                            <div
                                className="resize-handle absolute top-0 right-0 w-3 h-3 cursor-ne-resize"
                                onMouseDown={(e) => handleResizeStart(e, 'ne')}
                            />
                            <div
                                className="resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-se-resize"
                                onMouseDown={(e) => handleResizeStart(e, 'se')}
                            />
                            <div
                                className="resize-handle absolute bottom-0 left-0 w-3 h-3 cursor-sw-resize"
                                onMouseDown={(e) => handleResizeStart(e, 'sw')}
                            />
                            <div
                                className="resize-handle absolute top-0 left-0 w-3 h-3 cursor-nw-resize"
                                onMouseDown={(e) => handleResizeStart(e, 'nw')}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Window;