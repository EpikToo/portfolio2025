import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            'start': 'Start',
            'welcome': 'Welcome to my portfolio',
        }
    },
    fr: {
        translation: {
            'start': 'Démarrer',
            'welcome': 'Bienvenue sur mon portfolio',
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;