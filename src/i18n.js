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
                    "matrix - ???",
                    "aperture - ???"
                ],
                "command_not_found": "Command not found: {{command}}",
                "about": "Backend developer specialized in data processing and distributed systems",
                "contact_info": "Contact information:",
                "phone": "Phone",
                "header": "Portfolio Command Line Interface - Type 'help'",
                "greeting": "Hello! Type 'help' to see available commands.",
                "matrix1": "Wake up, Neo...",
                "matrix2": "The Matrix has you...",
                "matrix3": "Follow the white rabbit.",
                "matrix4": "Knock, knock, Neo.",
                "aperture1": "Hello and welcome to the Aperture Science Computer-Aided Portfolio Enrichment Center.",
                "aperture2": "We hope your brief detention in the relaxation vault has been a pleasant one.",
                "aperture3": "For your own safety, please do not destroy vital testing apparatus.",
                "aperture4": "Remember: The cake is a lie."
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "About",
                    "content": "Backend developer with expertise in data systems and DevOps."
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
                "close": "Close",
                "confirm_close": "Are you sure you want to close the portfolio?"
            },
            "projects": {
                "search_placeholder": "Search projects...",
                "no_results": "No projects match your search."
            },
            "about": {
                "nametitle": "SAVALLE Florian",
                "namecontent": "IT Engineer Apprentice",
                "profiletitle": "Profile",
                "profilecontent": "Hey there! I'm Florian, a 23-year-old backend developer apprentice working at Covage in Rouen. My tech journey started back in high school with engineering sciences classes, where I discovered I could combine my love for science with actual problem-solving.\n\nAfter diving into embedded systems and scientific applications early in my studies, I gradually fell down the rabbit hole of backend development, data engineering, and AI. These days, I'm focused on building robust systems that make sense of data - whether that's telecom platforms, ETL pipelines, or machine learning models.\n\nWhat I love about tech is how it connects to everything else. My background in math and physics often comes in handy when tackling complex problems, and I'm constantly learning new tools and approaches. I see myself as a backend problem solver with a soft spot for data systems and a growing fascination with AI.",
                "misctitle": "Technical Skills",
                "misccontent1": "Development: Python, TypeScript/JavaScript | Adaptable to various programming languages",
                "misccontent2": "Frameworks: Django, React, Express.js",
                "misccontent3": "Practices: REST APIs, Microservices, Event-Driven Architecture, Modern development approaches",
                "misccontent4": "Data & AI: ETL pipelines, Airflow, ClickHouse, PostgreSQL, MySQL, SQLServer, MongoDB, TensorFlow, PyTorch, Data science libraries (pandas, numpy), ML applications (classification, NLP, image recognition)",
                "misccontent5": "DevOps: Docker, Kubernetes, Modern CI/CD pipelines, Git, Linux administration, VM architecture with firewalls/DMZ",
                "misccontent6": "Other: Network engineering (CCNA Certification), System administration, Mathematics & algorithms, Project management, Management principles",
                "experiencetitle": "Experience",
                "experiencecontent1": "July 2024 - October 2024 -> Data Warehouse Engineer Intern at TurkuAMK (Turku, Finland)",
                "experiencecontent2": "June 2024 - July 2024 -> SNN Research Intern at CESI Lab (Rouen, France)",
                "experiencecontent3": "October 2022 - October 2025 -> Backend Developer Apprentice at Covage (Mont-Saint-Aignan, France)",
                "experiencecontent4": "April 2022 – July 2022 -> IT Technician at ArianeGroup (Vernon, France)",
                "studiestitle": "Studies",
                "studiescontent1": "September 2020 - October 2025 -> Master's of Engineering in Computer Science, CESI école d'ingénieur (Rouen, France)",
                "studiescontent2": "September 2017 – June 2020 -> Scientific Baccalaureate, Engineering Sciences specialization (with honors) at Lycée Pierre de Coubertin (Bolbec, France)",
                "passionstitle": "Passions",
                "passionscontent": "I'm a big sci-fi and fantasy enthusiast – both for reading and gaming (mostly niche titles, with a soft spot for RTS and city builders). I have a serious passion for tanks and military vehicles, especially early WW2 and post-war models – yes, I actually visit museums specifically for this! Military aviation comes in as a close second interest.\n\nWhen I'm not geeking out on tech or history, you'll find me at the climbing gym, working out, or occasionally enjoying a night out. I'm also fascinated by history and geography, particularly French history.\n\nOn the tech side, I've been optimistic about AI's potential since GPT-3's initial release in 2022, where I immediately saw its transformative possibilities. I've got a few personal coding projects underway (aren't they always 'in progress'?) – mostly AI-related experiments that I swear I'll finish someday!",
                "floriancontent1": "23 Y/O",
                "floriancontent2": "florian.savalle@viacesi.fr",
                "floriancontent3": "+33 6.05.84.52.09",
                "floriancontent4": "Driving license and personal vehicle",
                "projectstitle": "Projects",
                "projectscontent1": "Kosc Platform: Telecom workflow management platform integrating various Covage business processes (Django, Angular, Event-driven architecture) at Covage",
                "projectscontent2": "MyEWay-DW: ETL pipelines and data warehouse architecture for sports analytics platform (Airflow, ClickHouse, Express.js) at TurkuAMK",
                "projectscontent3": "GASTON: ML-based ticketing classification system for telecom network issues (PyTorch, Django) at Covage",
                "projectscontent4": "Eat'Em: Microservices-based food delivery platform (React, Node.js, Kubernetes) at CESI",
                "projectscontent5": "RALab: Automated spectrometry lab report generation system (VBA/Excel) at ArianeGroup",
                "projectscontent6": "Elifibre Interco BSB: Fiber optic eligibility assessment system for business clients (C# .NET, Ajax) at Covage",
                "projectscontent7": "ADEME: Advanced pathfinding algorithm for eco-friendly routing (Python) at CESI",
                "projectscontent8": "CHU: Healthcare data analytics pipeline for hospital resource optimization (Talend, Hive, PowerBI) at CESI",
                "projectscontent9": "EasySave: Enterprise file backup solution with encryption and compression (C# .NET) at CESI",
                "projectscontent10": "ABSERGO SI: Enterprise information systems architecture design (System Administration) at CESI",
                "projectscontent11": "Funkytown: Urban network architecture for municipal services (System Administration, Networking) at CESI",
                "projectscontent12": "StrongBox: Security-focused embedded system for valuables storage (C Arduino) at CESI",
                "projectscontent13": "FoxStats: Game data analytics platform for Foxhole (Django, Angular) personal project",
                "projectscontent14": "GolChess: Chess engine with reinforcement learning capabilities (Python) personal project",
                "projectscontent15": "ViteMonStage: Internship matching platform for students (Native PHP) at CESI"
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
                    "matrix - ???",
                    "aperture - ???"
                ],
                "command_not_found": "Commande non reconnue: {{command}}",
                "about": "Développeur backend spécialisé en traitement de données et systèmes distribués",
                "contact_info": "Informations de contact :",
                "phone": "Téléphone",
                "header": "Interface en ligne de commande du Portfolio - Tapez 'help'",
                "greeting": "Bonjour ! Tapez 'help' pour voir les commandes disponibles.",
                "matrix1": "Réveillez-vous, Neo...",
                "matrix2": "La Matrice vous possède...",
                "matrix3": "Suivez le lapin blanc.",
                "matrix4": "Toc, toc, Neo.",
                "aperture1": "Bonjour et bienvenue au Centre d'Enrichissement de Portfolio Assisté par Ordinateur d'Aperture Science.",
                "aperture2": "Nous espérons que votre brève détention dans la chambre de relaxation a été agréable.",
                "aperture3": "Pour votre propre sécurité, veuillez ne pas détruire l'équipement de test vital.",
                "aperture4": "Souvenez-vous : Le gâteau est un mensonge."
            },
            "windows": {
                "terminal": {
                    "title": "Terminal"
                },
                "about": {
                    "title": "À propos",
                    "content": "Développeur backend avec expertise en systèmes de données et DevOps."
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
                "close": "Fermer",
                "confirm_close": "Êtes-vous sûr de vouloir fermer le portfolio ?"
            },
            "projects": {
                "search_placeholder": "Rechercher des projets...",
                "no_results": "Aucun projet ne correspond à votre recherche."
            },
            "about": {
                "nametitle": "SAVALLE Florian",
                "namecontent": "Apprenti Ingénieur en Informatique",
                "profiletitle": "Profil",
                "profilecontent": "Salut ! Je m'appelle Florian, j'ai 23 ans et je suis apprenti développeur backend chez Covage à Rouen. Mon aventure dans la tech a commencé au lycée avec la spécialité Sciences de l'Ingénieur, où j'ai découvert que je pouvais combiner ma passion pour les sciences avec la résolution de problèmes concrets.\n\nAprès m'être d'abord intéressé aux systèmes embarqués et aux applications scientifiques au début de mes études, je me suis progressivement tourné vers le développement backend, l'ingénierie de données et l'IA récemment. Aujourd'hui, je me concentre sur la construction de systèmes robustes qui donnent du sens aux données - qu'il s'agisse de plateformes télécom, de pipelines ETL ou de modèles d'apprentissage automatique.\n\nCe que j'aime dans la tech, c'est sa connexion avec tous les autres domaines. Mon bagage en maths et en physique se révèle souvent utile pour résoudre des problèmes complexes, et je suis constamment en train d'apprendre de nouveaux outils. Je me vois comme un résolveur de problèmes backend avec un faible pour les systèmes de données et une fascination grandissante pour l'IA.",
                "misctitle": "Compétences Techniques",
                "misccontent1": "Développement : Python, TypeScript/JavaScript | Adaptabilité aux différents langages de programmation",
                "misccontent2": "Frameworks : Django, React, Express.js",
                "misccontent3": "Pratiques : API REST, Microservices, Architecture événementielle, Approches de développement modernes",
                "misccontent4": "Data & IA : Pipelines ETL, Airflow, ClickHouse, PostgreSQL, MySQL, SQLServer, MongoDB, TensorFlow, PyTorch, Bibliothèques data science (pandas, numpy), Applications ML (classification, NLP, reconnaissance d'image)",
                "misccontent5": "DevOps : Docker, Kubernetes, Pipelines CI/CD modernes, Git, Administration Linux, Architecture VM avec firewalls/DMZ",
                "misccontent6": "Autres : Ingénierie réseau (Certification CCNA), Administration système, Mathématiques & algorithmes, Gestion de projet, Notions de management",
                "experiencetitle": "Expérience",
                "experiencecontent1": "Juillet 2024 - Octobre 2024 -> Ingénieur Data Warehouse stagiaire à TurkuAMK (Turku, Finlande)",
                "experiencecontent2": "Juin 2024 - Juillet 2024 -> Stagiaire chercheur en réseaux de neurones à impulsions au Laboratoire CESI (Rouen, France)",
                "experiencecontent3": "Octobre 2022 - Octobre 2025 -> Apprenti Développeur Backend chez Covage (Mont-Saint-Aignan, France)",
                "experiencecontent4": "Avril 2022 – Juillet 2022 -> Technicien Informatique chez ArianeGroup (Vernon, France)",
                "studiestitle": "Études",
                "studiescontent1": "Septembre 2020 - Octobre 2025 -> Diplôme d'Ingénieur en Informatique, CESI école d'ingénieur (Rouen, France)",
                "studiescontent2": "Septembre 2017 – Juin 2020 -> Baccalauréat Scientifique, spécialité Sciences de l'Ingénieur (mention bien) au Lycée Pierre de Coubertin (Bolbec, France)",
                "passionstitle": "Centres d'intérêt",
                "passionscontent": "Je suis un grand amateur de SF et de fantasy – tant pour la lecture que les jeux vidéo (souvent des titres assez niches, avec une préférence pour les RTS et les city builders). J'ai une véritable passion pour les chars et véhicules militaires, particulièrement ceux du début de la Seconde Guerre mondiale et de l'après-guerre – oui, je visite vraiment des musées spécifiquement pour ça ! L'aviation militaire arrive en deuxième position.\n\nQuand je ne suis pas plongé dans la tech ou l'histoire, vous me trouverez à la salle d'escalade, à la salle de sport, ou occasionnellement en train de profiter d'une soirée entre amis. Je suis également passionné d'histoire et de géographie, particulièrement l'histoire française.\n\nCôté tech, je suis optimiste quant au potentiel de l'IA depuis la sortie initiale de GPT-3 en 2022, où j'ai immédiatement perçu ses possibilités transformatives. J'ai quelques projets de code personnels en cours (ne le sont-ils pas toujours ?) – principalement des expériences liées à l'IA que je jure de terminer un jour !",
                "floriancontent1": "23 ans",
                "floriancontent2": "florian.savalle@viacesi.fr",
                "floriancontent3": "06.05.84.52.09",
                "floriancontent4": "Permis B et véhicule personnel",
                "projectstitle": "Projets",
                "projectscontent1": "Plateforme Kosc : Plateforme de gestion des flux télécom intégrant les processus métier de Covage (Django, Angular, Architecture événementielle) chez Covage",
                "projectscontent2": "MyEWay-DW : Pipelines ETL et architecture d'entrepôt de données pour plateforme d'analyse sportive (Airflow, ClickHouse, Express.js) à TurkuAMK",
                "projectscontent3": "GASTON : Système de classification de tickets basé sur ML pour les problèmes réseau télécom (PyTorch, Django) chez Covage",
                "projectscontent4": "Eat'Em : Plateforme de livraison de repas basée sur les microservices (React, Node.js, Kubernetes) au CESI",
                "projectscontent5": "RALab : Système de génération automatisée de rapports de laboratoire de spectrométrie (VBA/Excel) chez ArianeGroup",
                "projectscontent6": "Elifibre Interco BSB : Système d'évaluation d'éligibilité à la fibre optique pour clients professionnels (C# .NET, Ajax) chez Covage",
                "projectscontent7": "ADEME : Algorithme avancé de recherche de chemin pour routage écologique (Python) au CESI",
                "projectscontent8": "CHU : Pipeline d'analyse de données de santé pour l'optimisation des ressources hospitalières (Talend, Hive, PowerBI) au CESI",
                "projectscontent9": "EasySave : Solution de sauvegarde de fichiers d'entreprise avec chiffrement et compression (C# .NET) au CESI",
                "projectscontent10": "ABSERGO SI : Conception d'architecture de systèmes d'information d'entreprise (Administration système) au CESI",
                "projectscontent11": "Funkytown : Architecture réseau urbaine pour services municipaux (Administration système, Réseaux) au CESI",
                "projectscontent12": "StrongBox : Système embarqué orienté sécurité pour stockage d'objets de valeur (C Arduino) au CESI",
                "projectscontent13": "FoxStats : Plateforme d'analyse de données de jeu pour Foxhole (Django, Angular) projet personnel",
                "projectscontent14": "GolChess : Moteur d'échecs avec capacités d'apprentissage par renforcement (Python) projet personnel",
                "projectscontent15": "ViteMonStage : Plateforme de mise en relation pour stages étudiants (PHP natif) au CESI"
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