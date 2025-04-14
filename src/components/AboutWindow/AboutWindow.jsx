import React from 'react';
import { useTranslation } from 'react-i18next';
// Import supprimé pour éviter l'erreur
// import profileImg from '../../assets/profile.jpg';

const AboutWindow = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full overflow-auto bg-white p-4">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Section profile */}
                <div className="md:w-1/3 flex flex-col items-center">
                    <div className="w-40 h-40 mb-4 border-2 border-win98-window-border-dark shadow-win98-btn overflow-hidden">
                        {/* Placeholder pour l'image de profil */}
                        <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                            <span className="text-gray-600">Profile Image</span>
                        </div>
                        {/* Quand tu auras l'image, tu pourras utiliser ce code :
                        <img src={profileImg} alt="Florian Savalle" className="w-full h-full object-cover" />
                        */}
                    </div>

                    <h1 className="text-xl font-bold text-center mb-2">{t('about.nametitle')}</h1>
                    <p className="text-center mb-6">{t('about.namecontent')}</p>

                    <div className="w-full shadow-win98-btn bg-win98-button-face p-3 mb-4">
                        <ul className="space-y-2">
                            <li>{t('about.floriancontent1')}</li>
                            <li className="break-all">{t('about.floriancontent2')}</li>
                            <li>{t('about.floriancontent3')}</li>
                            <li>{t('about.floriancontent4')}</li>
                        </ul>
                    </div>
                </div>

                {/* Section informations */}
                <div className="md:w-2/3">
                    <section className="mb-6">
                        <h2 className="text-lg font-bold mb-2 bg-win98-window-title text-white px-2 py-1">
                            {t('about.profiletitle')}
                        </h2>
                        <p className="text-sm">{t('about.profilecontent')}</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold mb-2 bg-win98-window-title text-white px-2 py-1">
                            {t('about.misctitle')}
                        </h2>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>{t('about.misccontent1')}</li>
                            <li>{t('about.misccontent2')}</li>
                            <li>{t('about.misccontent3')}</li>
                            <li>{t('about.misccontent4')}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-bold mb-2 bg-win98-window-title text-white px-2 py-1">
                            {t('about.passionstitle')}
                        </h2>
                        <p className="text-sm">{t('about.passionscontent')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutWindow;