import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                className={`h-[24px] px-2 flex items-center gap-1 text-sm
                    ${isOpen ? 'shadow-win98-btn-pressed' : 'shadow-win98-btn hover:shadow-win98-btn-pressed'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {i18n.language.toUpperCase()}
            </button>

            {isOpen && (
                <div className="absolute bottom-full right-0 mb-1 w-32 bg-win98-button-face border-2 border-white">
                    <div className="border-2 border-win98-window-border-dark">
                        <div className="py-1">
                            <button
                                className="w-full px-2 py-1 text-left text-sm hover:bg-win98-window-title hover:text-white"
                                onClick={() => changeLanguage('fr')}
                            >
                                {t('language.fr')}
                            </button>
                            <button
                                className="w-full px-2 py-1 text-left text-sm hover:bg-win98-window-title hover:text-white"
                                onClick={() => changeLanguage('en')}
                            >
                                {t('language.en')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;