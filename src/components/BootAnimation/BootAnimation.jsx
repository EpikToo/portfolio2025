import React, { useState, useEffect } from 'react';
import './BootAnimation.css';

const BootAnimation = ({ onBootComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timers = [];

        timers.push(setTimeout(() => {
            setStage(1);
        }, 1000));

        timers.push(setTimeout(() => {
            setStage(2);
        }, 2000));

        timers.push(setTimeout(() => {
            setStage(3);
        }, 4000));

        timers.push(setTimeout(() => {
            onBootComplete();
        }, 5000));

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [onBootComplete]);

    const LoadingBlocks = () => (
        <div className="mt-4 flex justify-center">
            {[0, 1, 2, 3, 4].map(i => (
                <div
                    key={i}
                    className="win98-loading-block"
                    style={{ animationDelay: `${i * 0.2}s` }}
                />
            ))}
        </div>
    );

    return (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center boot-screen">
            <div className="text-center">
                {stage >= 1 && (
                    <div className="mb-8 boot-logo">
                        <div className="inline-block p-4 bg-win98-button-face shadow-win98-btn">
                            <div className="flex items-center justify-center">
                                <div className="mr-4">
                                    <svg width="80" height="80" viewBox="0 0 16 16">
                                        <rect width="16" height="16" fill="#C0C0C0"/>
                                        <rect x="2" y="2" width="5" height="5" fill="#FF0000"/>
                                        <rect x="9" y="2" width="5" height="5" fill="#00FF00"/>
                                        <rect x="2" y="9" width="5" height="5" fill="#0000FF"/>
                                        <rect x="9" y="9" width="5" height="5" fill="#FFFF00"/>
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <h1 className="text-4xl font-bold">Portfolio</h1>
                                    <p className="text-sm">By Florian Savalle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {stage >= 2 && (
                    <div className="mt-8">
                        <div className="w-64 h-4 border border-gray-700 mx-auto bg-black overflow-hidden">
                            <div
                                className="h-full bg-win98-window-title boot-progress-bar"
                                style={{ width: stage === 3 ? '100%' : '0%' }}
                            />
                        </div>
                        <p className="text-white mt-2">
                            {stage === 2 ? 'Booting the matrix...' : 'Welcome to my Portfolio!'}
                        </p>
                        {stage === 2 && <LoadingBlocks />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BootAnimation;