import React, { useEffect } from 'react';
import './BSOD.css';

const BSOD = ({ onClose }) => {
    useEffect(() => {
        // Ferme le BSOD après 5 secondes
        const timeout = setTimeout(() => {
            if (onClose) onClose();
        }, 5000);

        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className="bsod-overlay">
            <div className="bsod-container">
                <div className="bsod-header">
                    Windows
                </div>
                <div className="bsod-content">
                    <p className="bsod-title">
                        A problem has been detected and Windows has been shut down to prevent damage
                        to your computer.
                    </p>

                    <p>DRIVER_IRQL_NOT_LESS_OR_EQUAL</p>

                    <p>If this is the first time you've seen this error screen,
                        restart your computer. If this screen appears again, follow
                        these steps:</p>

                    <p>Check to make sure any new hardware or software is properly installed.
                        If this is a new installation, ask your hardware or software manufacturer
                        for any Windows updates you might need.</p>

                    <p>If problems continue, disable or remove any newly installed hardware
                        or software. Disable BIOS memory options such as caching or shadowing.
                        If you need to use Safe Mode to remove or disable components, restart
                        your computer, press F8 to select Advanced Startup Options, and then
                        select Safe Mode.</p>

                    <p>Technical information:</p>

                    <p>*** STOP: 0x000000D1 (0x0000000A, 0x00000002, 0x00000000, 0xF7A32000)</p>
                    <p>*** classpnp.sys - Address F7A32000 base at F7A1C000, DateStamp 41107b4d</p>

                    <p className="bsod-message">Please refresh...</p>
                </div>
            </div>
        </div>
    );
};

export default BSOD;