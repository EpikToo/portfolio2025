import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "start": "Start",
            "terminal": {
                "welcome": "Welcome to my portfolio",
                "help": "Available commands:",
                "help_commands": [
                    "help - Display this help",
                    "clear - Clear screen",
                    "about - About me"
                ],
                "command_not_found": "Command not found: {{command}}",
                "about": "Fullstack developer passionate about backend and distributed systems"
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "About",
                    "content": "Fullstack developer passionate about code and systems."
                }
            },
            "language": {
                "title": "Language",
                "fr": "Français",
                "en": "English"
            },
            "tooltips": {
                "start": "Click here to access portfolio features",
                "language": "Click here to change language"
            },
            "menu": {
                "close": "Close"
            }
        }
    },
    fr: {
        translation: {
            "start": "Démarrer",
            "terminal": {
                "welcome": "Bienvenue sur mon portfolio",
                "help": "Commandes disponibles:",
                "help_commands": [
                    "help - Affiche cette aide",
                    "clear - Efface l'écran",
                    "about - À propos de moi"
                ],
                "command_not_found": "Commande non reconnue: {{command}}",
                "about": "Développeur fullstack passionné par le backend et les systèmes distribués"
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "À propos",
                    "content": "Développeur fullstack passionné par le code et les systèmes."
                }
            },
            "language": {
                "title": "Langue",
                "fr": "Français",
                "en": "English"
            },
            "tooltips": {
                "start": "Cliquez ici pour accéder aux fonctionnalités du portfolio",
                "language": "Cliquez ici pour changer la langue"
            },
            "menu": {
                "close": "Fermer"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;