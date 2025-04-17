import React from 'react';
import { useTranslation } from 'react-i18next';
import CVDownloadButton from '../CVDownloadButton/CVDownloadButton';
import { LinkedInButton, GitHubButton } from '../SocialButtons/SocialButtons';
import './OranginaAnimation.css'; // Importer le fichier CSS pour l'animation

const SectionTitle = ({ children, color = "bg-win98-window-title" }) => (
    <div className={`${color} text-white px-2 py-1 mb-2 rounded-sm`}>
        <h2 className="text-sm md:text-lg font-bold truncate">{children}</h2>
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
                        <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-3 md:mb-4 border-2 border-win98-window-border-dark shadow-win98-btn overflow-hidden">
                            <img
                                src="/profilepic.png"
                                alt="Florian Savalle"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-lg md:text-xl font-bold text-center mb-2 break-words">{t('about.nametitle')}</h1>
                        <p className="text-center mb-3 md:mb-4 text-xs md:text-sm break-words">{t('about.namecontent')}</p>

                        <div className="mt-3 md:mt-4">
                            <CVDownloadButton />
                        </div>

                        <div className="mt-2 md:mt-3 flex flex-wrap gap-2 justify-center">
                            <LinkedInButton />
                            <GitHubButton />
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-blue-600">Info</SectionTitle>
                        <div className="p-2 md:p-3">
                            {/* Version Win98 stylisée des informations */}
                            <div className="space-y-1">
                                <div className="flex items-center mb-1">
                                    <div className="w-24 px-2 py-1 bg-win98-button-face text-xs text-black shadow-win98-btn mr-2 text-center font-bold">
                                        Age
                                    </div>
                                    <div className="flex-1 px-2 py-1 bg-white border border-win98-window-border-dark text-xs">
                                        {t('about.floriancontent1')}
                                    </div>
                                </div>

                                <div className="flex items-center mb-1">
                                    <div className="w-24 px-2 py-1 bg-win98-button-face text-xs text-black shadow-win98-btn mr-2 text-center font-bold">
                                        Email
                                    </div>
                                    <div className="flex-1 px-2 py-1 bg-white border border-win98-window-border-dark text-xs break-all">
                                        {t('about.floriancontent2')}
                                    </div>
                                </div>

                                <div className="flex items-center mb-1">
                                    <div className="w-24 px-2 py-1 bg-win98-button-face text-xs text-black shadow-win98-btn mr-2 text-center font-bold">
                                        Phone
                                    </div>
                                    <div className="flex-1 px-2 py-1 bg-white border border-win98-window-border-dark text-xs">
                                        {t('about.floriancontent3')}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-24 px-2 py-1 bg-win98-button-face text-xs text-black shadow-win98-btn mr-2 text-center font-bold">
                                        Mobility
                                    </div>
                                    <div className="flex-1 px-2 py-1 bg-white border border-win98-window-border-dark text-xs">
                                        {t('about.floriancontent4')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4 hover:shadow-lg transition-shadow overflow-hidden">
                        <SectionTitle color="bg-yellow-600">Orangina Man</SectionTitle>
                        <div className="p-2 flex justify-center bg-white">
                            <div className="max-w-full">
                                <img
                                    src="/orangina.png"
                                    alt="Orangina Fun"
                                    className="max-w-full h-auto orangina-mirror"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information section */}
                <div className="md:w-2/3">
                    <div className="bg-white border-2 border-win98-window-border-dark mb-3 md:mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-green-600">{t('about.profiletitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            {t('about.profilecontent').split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-xs md:text-sm break-words leading-relaxed mb-2">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-3 md:mb-4 hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-purple-600">{t('about.misctitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            <ul className="text-xs md:text-sm list-disc pl-4 md:pl-5 space-y-1 md:space-y-2">
                                <li className="break-words">{t('about.misccontent1')}</li>
                                <li className="break-words">{t('about.misccontent2')}</li>
                                <li className="break-words">{t('about.misccontent3')}</li>
                                <li className="break-words">{t('about.misccontent4')}</li>
                                <li className="break-words">{t('about.misccontent5')}</li>
                                <li className="break-words">{t('about.misccontent6')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark hover:shadow-lg transition-shadow">
                        <SectionTitle color="bg-red-600">{t('about.passionstitle')}</SectionTitle>
                        <div className="p-2 md:p-3">
                            {t('about.passionscontent').split('\n\n').map((paragraph, index) => (
                                <p key={index} className="text-xs md:text-sm break-words leading-relaxed mb-2">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWindow;