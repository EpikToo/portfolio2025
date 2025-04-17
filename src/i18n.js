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
                    "about - About me",
                    "projects - My projects",
                    "experience - My professional experience",
                    "contact - Contact information",
                    "skills - My skills",
                    "open [window] - Open a specific window (about, projects, experience, etc.)",
                    "close - Close current window",
                    "matrix - ???"
                ],
                "command_not_found": "Command not found: {{command}}",
                "about": "Fullstack developer passionate about backend and distributed systems",
                "contact_info": "Contact information:",
                "phone": "Phone",
                "header": "Portfolio Command Line Interface - Type 'help'",
                "greeting": "Hello! Type 'help' to see available commands.",
                "matrix1": "Wake up, Neo...",
                "matrix2": "The Matrix has you...",
                "matrix3": "Follow the white rabbit.",
                "matrix4": "Knock, knock, Neo."
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "About",
                    "content": "Fullstack developer passionate about code and systems."
                },
                "projects": {
                    "title": "Projects"
                },
                "experience": {
                    "title": "Experience"
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
            },
            "projects": {
                "search_placeholder": "Search projects...",
                "no_results": "No projects match your search."
            },
            // About content
            "about": {
                "nametitle": "SAVALLE Florian",
                "namecontent": "IT Engineer Apprentice",
                "profiletitle": "Profile",
                "profilecontent": "I'm a backend developer specializing in data engineering and artificial intelligence. After starting with full-stack development, I've progressively focused on my core interests: Python backend development, data engineering, and machine learning. My experience includes developing ETL pipelines, implementing neural networks for production environments, and managing complex backend systems. I'm particularly interested in MLOps (Machine Learning Operations) to bridge the gap between experimental AI and production-ready systems.",
                "misctitle": "Skills",
                "misccontent1": "Languages: Python (advanced), SQL, JavaScript/Node.js (intermediate), C#",
                "misccontent2": "Frameworks & Libraries: Django, Flask, FastAPI, PyTorch, scikit-learn, pandas, NumPy, React, Angular",
                "misccontent3": "Data Engineering: MongoDB, ClickHouse, PostgreSQL, ETL pipelines, Apache Airflow",
                "misccontent4": "DevOps & Infrastructure: Git, Docker, Kubernetes, CI/CD, REST APIs, MLOps",
                "misccontent5": "Languages: French (Native), English (980 TOEIC Score), Spanish (Notions)",
                "experiencetitle": "Experience",
                "experiencecontent1": "July 2024 - October 2024 -> Datawarehouse and ETL processes development internship at TurkuAMK (Turku, Finland)",
                "experiencecontent2": "June 2024 - July 2024 -> Spiked neural networks research intern at CESI Lab (Rouen, France)",
                "experiencecontent3": "October 2022 - October 2025 -> Development Engineer Apprentice at Covage (Mont-Saint-Aignan, France)",
                "experiencecontent4": "April 2022 – July 2022 -> IT Technician at ArianeGroup (Vernon, France)",
                "studiestitle": "Studies",
                "studiescontent1": "September 2020 - October 2025 -> Engineering Formation IT Specialty at CESI école d'ingénieur (Rouen, France)",
                "studiescontent2": "September 2017 – June 2020 -> Baccalaureate S-SI (with honors) at Lycée Pierre de Coubertin (Bolbec, France)",
                "passionstitle": "Passions",
                "passionscontent": "Science-fiction and fantasy (books, films, series), RTS and City Building Games, History, Post WW1 and WW2 Tanks, Bouldering",
                "floriancontent1": "23 Y/O",
                "years": "years old",
                "floriancontent2": "florian.savalle@viacesi.fr",
                "floriancontent3": "+33 6.05.84.52.09",
                "floriancontent4": "Driving license and personal vehicle",
                "projectstitle": "Projects",
                "projectscontent1": "CRI Service Manager: Full-stack system for managing intervention reports (Python, Django, REST API) at Covage",
                "projectscontent2": "Kosc Plateforme: WEB platform bringing together Covage processes (Django, Angular) at Covage",
                "projectscontent3": "SNN Research: Spiking neural networks implementation and experimentation (PyTorch) at CESI Lab",
                "projectscontent4": "MyEWay-DW: Datawarehouse, ETL processes and API development (Airflow, Clickhouse, NodeJS) at TurkuAMK",
                "projectscontent5": "Eat'Em: Micro-service Uber Eat like website (React, NodeJS, Kubernetes) at CESI",
                "projectscontent6": "GASTON: AI module for Covage telco ticketing (PyTorch, Django, MLOps) at Covage",
                "projectscontent7": "RALab: Lab automatic redaction software (VBA) at ArianeGroup",
                "projectscontent8": "ADEME: Advanced pathfinding algorithm (Python) at CESI",
                "projectscontent9": "EasySave: File backup app (C# .NET) at CESI",
                "projectscontent10": "CHU: Big Data project for hospital purposes (Talend, Hive, PowerBI) at CESI",
                "projectscontent11": "Elifibre Interco BSB: Software to establish fiber eligibility (C# .Net, Ajax) at Covage",
                "projectscontent12": "ABSERGO SI: Information systems architecture for fictitious company (System administration) at CESI",
                "projectscontent13": "ViteMonStage: Website for finding internships (Native PHP) at CESI",
                "projectscontent14": "GolChess: Chess Bot (Python) at home",
                "projectscontent15": "Funkytown: Network architecture for fictitious city (System administration, Networking) at CESI",
                "projectscontent16": "StrongBox: Embedded system for safe (C Arduino) at CESI",
                "projectscontent17": "FoxStats: Foxhole game information retrieval and processing (Django, Angular) at home",
                "projectscontent18": "AI Powered Home Assistant: Personal AI assistant prototype using neural networks (Python, PyTorch) at home",
                "projectscontent19": "And more non-IT related projects..."
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
                    "about - À propos de moi",
                    "projects - Mes projets",
                    "experience - Mon expérience professionnelle",
                    "contact - Informations de contact",
                    "skills - Mes compétences",
                    "open [fenêtre] - Ouvre une fenêtre spécifique (about, projects, experience, etc.)",
                    "close - Ferme la fenêtre actuelle",
                    "matrix - ???"
                ],
                "command_not_found": "Commande non reconnue: {{command}}",
                "about": "Développeur fullstack passionné par le backend et les systèmes distribués",
                "contact_info": "Informations de contact :",
                "phone": "Téléphone",
                "header": "Interface en ligne de commande du Portfolio - Tapez 'help'",
                "greeting": "Bonjour ! Tapez 'help' pour voir les commandes disponibles.",
                "matrix1": "Réveillez-vous, Neo...",
                "matrix2": "La Matrice vous possède...",
                "matrix3": "Suivez le lapin blanc.",
                "matrix4": "Toc, toc, Neo."
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "À propos",
                    "content": "Développeur fullstack passionné par le code et les systèmes."
                },
                "projects": {
                    "title": "Projets"
                },
                "experience": {
                    "title": "Expérience"
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
            },
            "projects": {
                "search_placeholder": "Rechercher des projets...",
                "no_results": "Aucun projet ne correspond à votre recherche."
            },
            // About content
            "about": {
                "nametitle": "SAVALLE Florian",
                "namecontent": "Apprenti Ingénieur en Informatique",
                "profiletitle": "Profil",
                "profilecontent": "Je suis un développeur backend spécialisé en ingénierie des données et en intelligence artificielle. Après avoir commencé par le développement full-stack, je me suis progressivement concentré sur mes domaines de prédilection : le développement backend en Python, l'ingénierie des données et le machine learning. Mon expérience comprend la création de pipelines ETL, l'implémentation de réseaux de neurones pour des environnements de production, et la gestion de systèmes backend complexes. Je m'intéresse particulièrement au MLOps (Machine Learning Operations) pour faire le pont entre l'IA expérimentale et les systèmes prêts pour la production.",
                "misctitle": "Compétences",
                "misccontent1": "Langages: Python (avancé), SQL, JavaScript/Node.js (intermédiaire), C#",
                "misccontent2": "Frameworks & Bibliothèques: Django, Flask, FastAPI, PyTorch, scikit-learn, pandas, NumPy, React, Angular",
                "misccontent3": "Ingénierie des données: MongoDB, ClickHouse, PostgreSQL, pipelines ETL, Apache Airflow",
                "misccontent4": "DevOps & Infrastructure: Git, Docker, Kubernetes, CI/CD, APIs REST, MLOps",
                "misccontent5": "Languages: Français (Natif), Anglais (900+ TOEIC), Espagnol (Notions)",
                "experiencetitle": "Expérience",
                "experiencecontent1": "Juillet 2024 - Octobre 2024 -> Développement d'un entrepot de données et de process ETL en stage à TurkuAMK (Turku, Finlande)",
                "experiencecontent2": "Juin 2024 - Juillet 2024 -> Stage chercheur sur les réseaux de neuronnes à impulsions chez CESI Laboratoire (Rouen, France)",
                "experiencecontent3": "Octobre 2022 - Octobre 2025 -> Apprenti Ingénieur Développement chez Covage (Mont-Saint-Aignan, France)",
                "experiencecontent4": "Avril 2022 – Juillet 2022 -> Technicien Informatique chez ArianeGroup (Vernon, France)",
                "studiestitle": "Études",
                "studiescontent1": "Septembre 2020 - Octobre 2025 -> Formation d'ingénieur Spécialisé en informatique à CESI école d'ingénieur (Rouen, France)",
                "studiescontent2": "Septembre 2017 – Juin 2020 -> Baccalauréat S-SI (mention bien) au Lycée Pierre de Coubertin (Bolbec, France)",
                "passionstitle": "Passions",
                "passionscontent": "Science-fiction et fantasie (livres, films, séries), Histoire, Jeux RTS et City Building, Chars Post WW1 et WW2, Escalade",
                "floriancontent1": "23 ans",
                "years": "ans",
                "floriancontent2": "florian.savalle@viacesi.fr",
                "floriancontent3": "06.05.84.52.09",
                "floriancontent4": "Permis B et véhicule personnel",
                "projectstitle": "Projets",
                "projectscontent1": "Gestionnaire de CRI: Système full-stack pour la gestion des comptes-rendus d'intervention (Python, Django, API REST) chez Covage",
                "projectscontent2": "Kosc Plateforme: Plateforme WEB regroupant les process Covage (Django, Angular) chez Covage",
                "projectscontent3": "Recherche SNN: Implémentation et expérimentation sur les réseaux de neurones à spikes (PyTorch) au laboratoire du CESI",
                "projectscontent4": "MyEWay-DW: Développement d'entrepot de données, de process ETL et d'API (Airflow, Clickhouse, NodeJS) chez TurkuAMK",
                "projectscontent5": "Eat'Em: Site WEB de micro-service type Uber Eat (React, NodeJS, Kubernetes) au CESI",
                "projectscontent6": "GASTON: Module IA pour le ticketing télécom Covage (PyTorch, Django, MLOps) chez Covage",
                "projectscontent7": "RALab: Logiciel de rédaction automatique de laboratoire (VBA) chez ArianeGroup",
                "projectscontent8": "ADEME: Algorithme de recherche de chemin avancé (Python) au CESI",
                "projectscontent9": "EasySave: Application de sauvegardes de fichiers (C# .NET) au CESI",
                "projectscontent10": "CHU: Projet Big Data à but hospitalier (Talend, Hive, PowerBI) au CESI",
                "projectscontent11": "Elifibre Interco BSB: Logiciel permettant d'établir l'éligibilité à la fibre (C# .Net, Ajax) chez Covage",
                "projectscontent12": "ABSERGO SI: Architecture SI pour entreprise fictive (Administration système) au CESI",
                "projectscontent13": "ViteMonStage: Site WEB pour la recherche de stages (PHP Natif) au CESI",
                "projectscontent14": "GolChess: Bot pour le jeu d'échecs (Python) chez moi",
                "projectscontent15": "Funkytown: Architecture réseaux pour une ville fictive (Administration système, Réseaux) au CESI",
                "projectscontent16": "StrongBox: Système embarqué pour coffre-fort (C Arduino) au CESI",
                "projectscontent17": "FoxStats: Récupération et traitement des informations du jeu Foxhole (Django, Angular) chez moi",
                "projectscontent18": "Assistant Maison IA: Prototype d'assistant personnel utilisant des réseaux de neurones (Python, PyTorch) chez moi",
                "projectscontent19": "Et bien d'autres projets non liés à l'informatique..."
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