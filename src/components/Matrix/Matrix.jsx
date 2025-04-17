import React, { useEffect, useRef } from 'react';
import './Matrix.css';

const Matrix = ({ onClose, autoCloseTime = 10000 }) => {
    const canvasRef = useRef(null);

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

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

        const matrixChars = matrix.split("");

        const fontSize = 14;
        const columns = canvas.width / fontSize;

        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 35);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [onClose, autoCloseTime]);

    return (
        <div className="matrix-container">
            <canvas ref={canvasRef} className="matrix-canvas"></canvas>
            <div className="matrix-message">
                <p className="typewriter-text">Wake up, Neo...</p>
                <p className="typewriter-text delay-1">The Matrix has you...</p>
                <p className="typewriter-text delay-2">Follow the white rabbit.</p>
                <p className="typewriter-text delay-3">Knock, knock, Neo.</p>
            </div>
        </div>
    );
};

export default Matrix;