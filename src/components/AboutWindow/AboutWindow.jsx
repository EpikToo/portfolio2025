import React from 'react';
import { useTranslation } from 'react-i18next';
import CVDownloadButton from '../CVDownloadButton/CVDownloadButton';
import { LinkedInButton, GitHubButton } from '../SocialButtons/SocialButtons';

// Composant de titre de section avec des couleurs plus vives
const SectionTitle = ({ children, color = "bg-win98-window-title" }) => (
    <div className={`${color} text-white px-2 py-1 mb-2 rounded-sm`}>
        <h2 className="text-lg font-bold">{children}</h2>
    </div>
);

const AboutWindow = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full overflow-auto bg-win98-button-face p-4">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Profile section */}
                <div className="md:w-1/3 flex flex-col">
                    <div className="bg-white border-2 border-win98-window-border-dark p-4 mb-4 hover:shadow-lg transition-shadow">
                        <div className="w-40 h-40 mx-auto mb-4 border-2 border-win98-window-border-dark shadow-win98-btn overflow-hidden">
                            {/* Image de profil */}
                            <img
                                src="/profilepic.png"
                                alt="Florian Savalle"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-xl font-bold text-center mb-2">{t('about.nametitle')}</h1>
                        <p className="text-center mb-4">{t('about.namecontent')}</p>

                        {/* Bouton de téléchargement de CV */}
                        <div className="mt-4">
                            <CVDownloadButton />
                        </div>

                        {/* Boutons des réseaux sociaux */}
                        <div className="mt-3 flex gap-2 justify-center">
                            <LinkedInButton />
                            <GitHubButton />
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-blue-600">Info</SectionTitle>
                        <div className="p-3">
                            <ul className="space-y-2 text-sm">
                                <li className="flex">
                                    <span className="font-bold w-16">Age:</span>
                                    <span>{t('about.floriancontent1')}</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-16">Email:</span>
                                    <span className="break-all">{t('about.floriancontent2')}</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-16">Phone:</span>
                                    <span>{t('about.floriancontent3')}</span>
                                </li>
                                <li className="flex">
                                    <span className="font-bold w-16">Note:</span>
                                    <span>{t('about.floriancontent4')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Information section */}
                <div className="md:w-2/3">
                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-green-600">{t('about.profiletitle')}</SectionTitle>
                        <div className="p-3">
                            <p className="text-sm">{t('about.profilecontent')}</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-purple-600">{t('about.misctitle')}</SectionTitle>
                        <div className="p-3">
                            <ul className="text-sm list-disc pl-5 space-y-2">
                                <li>{t('about.misccontent1')}</li>
                                <li>{t('about.misccontent2')}</li>
                                <li>{t('about.misccontent3')}</li>
                                <li>{t('about.misccontent4')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-red-600">{t('about.passionstitle')}</SectionTitle>
                        <div className="p-3">
                            <p className="text-sm">{t('about.passionscontent')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWindow;