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
    const [isActive, setIsActive] = useState(false);
    const windowRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const initialZIndex = registerWindow(windowId);
        setZIndex(initialZIndex);

        adjustWindowPosition();

        const handleWindowResize = () => {
            adjustWindowPosition();

            if (isMaximized && windowRef.current) {
                const parent = windowRef.current.parentElement;
                if (parent) {
                    setSize({
                        width: parent.clientWidth,
                        height: parent.clientHeight - 40
                    });
                }
            }
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
            unregisterWindow(windowId);
        };
    }, [isMaximized]);

    const adjustWindowPosition = () => {
        if (!windowRef.current) return;

        const parent = windowRef.current.parentElement;
        if (!parent) return;

        const parentRect = parent.getBoundingClientRect();
        let newPos = { ...position };

        if (newPos.x + 60 > parentRect.width) {
            newPos.x = Math.max(0, parentRect.width - 120);
        }

        if (newPos.y + 60 > parentRect.height) {
            newPos.y = Math.max(0, parentRect.height - 120);
        }

        if (newPos.x < 0) newPos.x = 0;
        if (newPos.y < 0) newPos.y = 0;

        if (newPos.x !== position.x || newPos.y !== position.y) {
            setPosition(newPos);
        }
    };

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
        setIsActive(true);
    };

    const handleTitleBarDoubleClick = (e) => {
        e.preventDefault();
        toggleMaximize();
    };

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

            // Ensure title bar remains visible
            newX = Math.max(-windowRect.width + 100, Math.min(newX, parentRect.width - 50));
            newY = Math.max(0, Math.min(newY, parentRect.height - 30));

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
                newWidth = Math.max(250, Math.min(
                    resizeStart.width + deltaX,
                    parentRect.width - position.x
                ));
            }

            if (resizeDirection.includes('s')) {
                newHeight = Math.max(200, Math.min(
                    resizeStart.height + deltaY,
                    parentRect.height - position.y
                ));
            }

            if (resizeDirection.includes('w')) {
                const possibleWidth = resizeStart.width - deltaX;
                if (possibleWidth >= 250) {
                    newWidth = possibleWidth;
                    newX = Math.min(
                        position.x + deltaX,
                        position.x + size.width - 250
                    );
                }
            }

            if (resizeDirection.includes('n')) {
                const possibleHeight = resizeStart.height - deltaY;
                if (possibleHeight >= 200) {
                    newHeight = possibleHeight;
                    newY = Math.min(
                        position.y + deltaY,
                        position.y + size.height - 200
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

    const handleTouchStart = (e) => {
        if (isMaximized) return;
        if (!e.target.closest('.window-title-bar')) return;

        const touch = e.touches[0];
        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top
        });
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        const parentRect = windowRef.current.parentElement.getBoundingClientRect();
        const windowRect = windowRef.current.getBoundingClientRect();

        let newX = touch.clientX - dragOffset.x;
        let newY = touch.clientY - dragOffset.y;

        newX = Math.max(-windowRect.width + 100, Math.min(newX, parentRect.width - 50));
        newY = Math.max(0, Math.min(newY, parentRect.height - 30));

        setPosition({ x: newX, y: newY });
        e.preventDefault();
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleTouchEnd);
        }
        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

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
            <div className="bg-win98-button-face border-2 border-white h-full w-full shadow-win98-window">
                <div className="border-2 border-win98-window-border-dark h-full flex flex-col">
                    {/* Title bar - Darker shade of blue for active windows */}
                    <div
                        className={`window-title-bar px-2 py-1 flex justify-between items-center cursor-grab select-none
                            ${isActive ? 'bg-[#000055] text-white' : 'bg-gray-500 text-gray-200'}`}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onDoubleClick={handleTitleBarDoubleClick}
                    >
                        <span className="font-bold text-xs md:text-sm truncate max-w-[calc(100%-60px)]">
                            {title}
                        </span>
                        {/* Control buttons */}
                        <div className="flex gap-1">
                            <button
                                className="min-w-[18px] h-[18px] md:min-w-[20px] md:h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={onMinimize}
                            >
                                <WindowControls.Minimize />
                            </button>
                            <button
                                className="min-w-[18px] h-[18px] md:min-w-[20px] md:h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={toggleMaximize}
                            >
                                <WindowControls.Maximize />
                            </button>
                            <button
                                className="min-w-[18px] h-[18px] md:min-w-[20px] md:h-[20px] px-1 shadow-win98-btn hover:shadow-win98-btn-pressed bg-win98-button-face flex items-center justify-center"
                                onClick={onClose}
                            >
                                <WindowControls.Close />
                            </button>
                        </div>
                    </div>

                    {/* Window content */}
                    <div ref={contentRef} className="flex-1 overflow-hidden relative">
                        {children}
                    </div>

                    {/* Resize handles */}
                    {!isMaximized && (
                        <>
                            {/* Corner resize handles */}
                            <div
                                className="resize-handle absolute top-0 right-0 w-5 h-5 cursor-ne-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'ne')}
                            />
                            <div
                                className="resize-handle absolute bottom-0 right-0 w-5 h-5 cursor-se-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'se')}
                            />
                            <div
                                className="resize-handle absolute bottom-0 left-0 w-5 h-5 cursor-sw-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'sw')}
                            />
                            <div
                                className="resize-handle absolute top-0 left-0 w-5 h-5 cursor-nw-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'nw')}
                            />

                            {/* Edge resize handles */}
                            <div
                                className="resize-handle absolute top-0 left-5 right-5 h-3 cursor-n-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'n')}
                            />
                            <div
                                className="resize-handle absolute bottom-0 left-5 right-5 h-3 cursor-s-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 's')}
                            />
                            <div
                                className="resize-handle absolute left-0 top-5 bottom-5 w-3 cursor-w-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'w')}
                            />
                            <div
                                className="resize-handle absolute right-0 top-5 bottom-5 w-3 cursor-e-resize z-10"
                                onMouseDown={(e) => handleResizeStart(e, 'e')}
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Window;