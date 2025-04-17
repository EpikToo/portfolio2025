import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ApertureEasterEgg.css';

const ApertureEasterEgg = ({ onClose, autoCloseTime = 15000 }) => {
    const { t } = useTranslation();
    const canvasRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [showPortal, setShowPortal] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) onClose();
        }, autoCloseTime);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const counterInterval = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);

        const messageTimers = [
            setTimeout(() => setCurrentStep(1), 2000),
            setTimeout(() => setCurrentStep(2), 5000),
            setTimeout(() => setCurrentStep(3), 8000),
            setTimeout(() => {
                setShowPortal(true);
                setCurrentStep(4);
            }, 11000)
        ];

        return () => {
            clearTimeout(timer);
            messageTimers.forEach(timer => clearTimeout(timer));
            clearInterval(counterInterval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [onClose, autoCloseTime]);

    return (
        <div className="aperture-container">
            <canvas ref={canvasRef} className="aperture-canvas"></canvas>

            <div className="aperture-header">
                APERTURE SCIENCE TEST SUBJECT<br />
                USER/DESKTOP
            </div>

            <div className="aperture-data">
                <div className="aperture-metrics">
                    <div>2.67</div>
                    <div>1002</div>
                    <div>45.6</div>
                </div>
                <div className="aperture-portal-indicator">
                    <div className="aperture-portal-icon"></div>
                </div>
            </div>

            <div className="aperture-content">
                <div className="aperture-logo-container">
                    <div className={`aperture-logo ${showPortal ? 'portal-active' : ''}`}></div>
                </div>

                <div className="aperture-message">
                    {currentStep >= 0 && (
                        <p className="aperture-text">{t('terminal.aperture1')}</p>
                    )}

                    {currentStep >= 1 && (
                        <p className="aperture-text delay-1">{t('terminal.aperture2')}</p>
                    )}

                    {currentStep >= 2 && (
                        <p className="aperture-text delay-2">{t('terminal.aperture3')}</p>
                    )}

                    {currentStep >= 3 && (
                        <p className="aperture-text delay-3 cake-text">{t('terminal.aperture4')}</p>
                    )}

                    <div className="aperture-counter">
                        {counter.toString().padStart(2, '0')}:{Math.floor(Math.random() * 100).toString().padStart(2, '0')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApertureEasterEgg;