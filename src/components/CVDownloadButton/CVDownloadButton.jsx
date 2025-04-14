import React from 'react';
import { useTranslation } from 'react-i18next';

const CVDownloadButton = () => {
    const { i18n } = useTranslation();

    const cvFileName = i18n.language === 'fr' ? 'CV_main_FR.pdf' : 'CV_main_ENG.pdf';

    return (
        <button
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold
                      border-2 border-win98-window-border-dark shadow-win98-btn hover:shadow-win98-btn-pressed
                      transition-colors w-full"
            onClick={() => window.open(cvFileName, '_blank')}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" className="inline-block">
                <path d="M8,2 L8,10 M5,7 L8,10 L11,7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M3,12 L13,12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {i18n.language === 'fr' ? 'Télécharger mon CV' : 'Download my CV'}
        </button>
    );
};

export default CVDownloadButton;