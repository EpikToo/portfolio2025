import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionTitle = ({ children }) => (
    <div className="bg-win98-window-title text-white px-2 py-1 mb-2">
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
                    <div className="bg-white border-2 border-win98-window-border-dark p-4 mb-4">
                        <div className="w-40 h-40 mx-auto mb-4 border-2 border-win98-window-border-dark shadow-win98-btn overflow-hidden">
                            {/* Placeholder for profile image */}
                            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                                <span className="text-gray-600">Profile Image</span>
                            </div>
                            {/* When you have the image, you can use this code:
                            <img src={profileImg} alt="Florian Savalle" className="w-full h-full object-cover" />
                            */}
                        </div>

                        <h1 className="text-xl font-bold text-center mb-2">{t('about.nametitle')}</h1>
                        <p className="text-center mb-4">{t('about.namecontent')}</p>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4">
                        <SectionTitle>Info</SectionTitle>
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
                    <div className="bg-white border-2 border-win98-window-border-dark mb-4">
                        <SectionTitle>{t('about.profiletitle')}</SectionTitle>
                        <div className="p-3">
                            <p className="text-sm">{t('about.profilecontent')}</p>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark mb-4">
                        <SectionTitle>{t('about.misctitle')}</SectionTitle>
                        <div className="p-3">
                            <ul className="text-sm list-disc pl-5 space-y-2">
                                <li>{t('about.misccontent1')}</li>
                                <li>{t('about.misccontent2')}</li>
                                <li>{t('about.misccontent3')}</li>
                                <li>{t('about.misccontent4')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-win98-window-border-dark">
                        <SectionTitle>{t('about.passionstitle')}</SectionTitle>
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