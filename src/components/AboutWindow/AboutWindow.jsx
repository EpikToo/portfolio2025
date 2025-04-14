import React from 'react';
import { useTranslation } from 'react-i18next';
import CVDownloadButton from '../CVDownloadButton/CVDownloadButton';
import { LinkedInButton, GitHubButton } from '../SocialButtons/SocialButtons';

// Composant de titre de section avec des couleurs plus vives
const SectionTitle = ({ children, color = "bg-win98-window-title" }) => (
    <div className={`${color} text-white px-2 py-1 mb-2 rounded-sm`}>
        <h2 className="text-lg font-bold truncate">{children}</h2>
    </div>
);

const AboutWindow = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full overflow-auto bg-win98-button-face p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                {/* Profile section */}
                <div className="md:w-1/3 flex flex-col">
                    <div className="bg-white border-2 border-win98-window-border-dark p-2 md:p-4 mb-4 hover:shadow-lg transition-shadow">
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 border-2 border-win98-window-border-dark shadow-win98-btn overflow-hidden">
                            {/* Image de profil */}
                            <img
                                src="/profilepic.png"
                                alt="Florian Savalle"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-xl font-bold text-center mb-2 break-words">{t('about.nametitle')}</h1>
                        <p className="text-center mb-4 text-sm break-words">{t('about.namecontent')}</p>

                        {/* Bouton de téléchargement de CV */}
                        <div className="mt-4">
                            <CVDownloadButton />
                        </div>

                        {/* Boutons des réseaux sociaux */}
                        <div className="mt-3 flex flex-wrap gap-2 justify-center">
                            <LinkedInButton />
                            <GitHubButton />
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-blue-600">Info</SectionTitle>
                        <div className="p-2 md:p-3">
                            <ul className="space-y-2 text-xs md:text-sm">
                                <li className="flex items-start">
                                    <span className="font-bold w-12 md:w-16 flex-shrink-0">Age:</span>
                                    <span className="break-words">{t('about.floriancontent1')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold w-12 md:w-16 flex-shrink-0">Email:</span>
                                    <span className="text-xs break-all">{t('about.floriancontent2')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold w-12 md:w-16 flex-shrink-0">Phone:</span>
                                    <span className="break-all">{t('about.floriancontent3')}</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold w-12 md:w-16 flex-shrink-0">Note:</span>
                                    <span className="break-words">{t('about.floriancontent4')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Information section */}
                <div className="md:w-2/3">
                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-green-600">{t('about.profiletitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            <p className="text-xs md:text-sm break-words">{t('about.profilecontent')}</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-purple-600">{t('about.misctitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            <ul className="text-xs md:text-sm list-disc pl-4 md:pl-5 space-y-1 md:space-y-2">
                                <li className="break-words">{t('about.misccontent1')}</li>
                                <li className="break-words">{t('about.misccontent2')}</li>
                                <li className="break-words">{t('about.misccontent3')}</li>
                                <li className="break-words">{t('about.misccontent4')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-red-600">{t('about.passionstitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            <p className="text-xs md:text-sm break-words">{t('about.passionscontent')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWindow;