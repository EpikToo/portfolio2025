import React from 'react';

export const StartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <rect width="16" height="16" fill="#C0C0C0"/>
        <rect x="2" y="2" width="5" height="5" fill="#FF0000"/>
        <rect x="9" y="2" width="5" height="5" fill="#00FF00"/>
        <rect x="2" y="9" width="5" height="5" fill="#0000FF"/>
        <rect x="9" y="9" width="5" height="5" fill="#FFFF00"/>
    </svg>
);

export const TerminalIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <rect width="16" height="16" fill="#000000"/>
        <text x="3" y="12" fill="#00FF00" style={{ font: '10px monospace' }}>{'>'}</text>
    </svg>
);

export const AboutIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <circle cx="8" cy="8" r="7" fill="#000080"/>
        <text x="8" y="12" textAnchor="middle" fill="white" style={{ font: 'bold 12px sans-serif' }}>i</text>
    </svg>
);

export const ProjectsIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <rect width="16" height="16" fill="#FFF8DC"/>
        <rect x="2" y="2" width="12" height="2" fill="#000080"/>
        <rect x="2" y="6" width="12" height="1" fill="#000080"/>
        <rect x="2" y="9" width="12" height="1" fill="#000080"/>
        <rect x="2" y="12" width="8" height="1" fill="#000080"/>
    </svg>
);

export const ExperienceIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
        <rect width="16" height="16" fill="#F0F0F0"/>
        <rect x="3" y="3" width="10" height="10" fill="#4169E1"/>
        <path d="M5,8 L11,8 M8,5 L8,11" stroke="white" strokeWidth="1.5"/>
    </svg>
);

export const WindowControls = {
    Close: () => (
        <svg width="10" height="10" viewBox="0 0 10 10" className="inline-block">
            <path d="M1,1 L9,9 M1,9 L9,1" stroke="black" strokeWidth="1.5"/>
        </svg>
    ),
    Minimize: () => (
        <svg width="16" height="14" viewBox="0 0 16 14" className="inline-block">
            <line x1="2" y1="8" x2="14" y2="8" stroke="black" strokeWidth="2"/>
        </svg>
    ),
    Maximize: () => (
        <svg width="16" height="14" viewBox="0 0 16 14" className="inline-block">
            <rect x="2" y="2" width="12" height="10" stroke="black" strokeWidth="2" fill="none"/>
        </svg>
    )
};