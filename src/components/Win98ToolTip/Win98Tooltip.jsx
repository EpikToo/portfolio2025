import React, { useState, useEffect } from 'react';
import { AboutIcon } from '../icons/Win98Icons';

const Win98Tooltip = ({
                          text,
                          position = 'top',
                          className = '',
                          onClose,
                          delay = 0,
                          autoClose = 0,
                          targetRef = null  // Référence vers l'élément cible
                      }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => {
            setIsMounted(true);
            setIsVisible(true);
        }, delay);

        let closeTimeout;
        if (autoClose > 0) {
            closeTimeout = setTimeout(handleClose, delay + autoClose);
        }

        // Gestion du hover sur l'élément cible
        const targetElement = targetRef?.current;
        if (targetElement) {
            const handleTargetHover = () => handleClose();
            targetElement.addEventListener('mouseenter', handleTargetHover);
            return () => {
                targetElement.removeEventListener('mouseenter', handleTargetHover);
                clearTimeout(showTimeout);
                clearTimeout(closeTimeout);
            };
        }

        return () => {
            clearTimeout(showTimeout);
            if (closeTimeout) clearTimeout(closeTimeout);
        };
    }, [delay, autoClose, onClose, targetRef]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsMounted(false);
            onClose?.();
        }, 150);
    };

    if (!isMounted) return null;

    const positionClasses = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
        left: 'right-full top-1/2 -translate-y-1/2 mr-3',
        right: 'left-full top-1/2 -translate-y-1/2 ml-3'
    };

    const Arrow = () => {
        const arrowClasses = {
            top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#FFFFE1]",
            bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#FFFFE1]",
            left: "right-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#FFFFE1]",
            right: "left-[-6px] top-1/2 -translate-y-1/2 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[6px] border-r-[#FFFFE1]"
        };

        const shadowClasses = {
            top: "bottom-[-7px] left-1/2 -translate-x-1/2 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-black",
            bottom: "top-[-7px] left-1/2 -translate-x-1/2 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-black",
            left: "right-[-7px] top-1/2 -translate-y-1/2 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[7px] border-l-black",
            right: "left-[-7px] top-1/2 -translate-y-1/2 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-r-[7px] border-r-black"
        };

        return (
            <>
                <div className={`absolute ${shadowClasses[position]}`} />
                <div className={`absolute ${arrowClasses[position]}`} />
            </>
        );
    };

    return (
        <div
            className={`absolute z-50 ${positionClasses[position]} ${className}
                       transition-opacity duration-150 ease-in-out
                       ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={handleClose}
        >
            <div className="relative flex items-center">
                <div className="bg-[#FFFFE1] border border-black px-4 py-2 text-sm max-w-xs shadow-md relative">
                    <div className="flex gap-2 items-start">
                        <div className="shrink-0 w-4 h-4 mt-0.5">
                            <AboutIcon />
                        </div>
                        <span>{text}</span>
                    </div>
                    <Arrow />
                </div>
            </div>
        </div>
    );
};

export default Win98Tooltip;