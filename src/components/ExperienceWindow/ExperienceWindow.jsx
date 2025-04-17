import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionTitle = ({ children, color = "bg-blue-600" }) => (
    <div className={`${color} text-white px-2 py-1 mb-2 rounded-sm`}>
        <h2 className="text-sm md:text-lg font-bold truncate">{children}</h2>
    </div>
);

const TimelineItem = ({ content, isCurrent }) => {
    const parts = content.split('->');

    return (
        <div className="mb-2 pb-2 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors p-1 md:p-2">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 font-bold text-xs md:text-sm mb-1 sm:mb-0 text-blue-600 break-words">
                    {parts[0].trim()}
                </div>
                <div className="sm:w-2/3 text-xs md:text-sm break-words">
                    <span>{parts[1].trim()}</span>
                    {isCurrent && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-1 py-0.5 rounded shadow-win98-btn whitespace-nowrap">
                            Current
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const ExperienceWindow = () => {
    const { t } = useTranslation();

    return (
        <div className="h-full overflow-auto bg-win98-button-face p-2 md:p-4">
            <div className="bg-white border-2 border-win98-window-border-dark mb-3 hover:shadow-lg transition-shadow">
                <SectionTitle color="bg-green-600">{t('about.experiencetitle')}</SectionTitle>

                <div className="p-2 md:p-4">
                    <TimelineItem
                        content={t('about.experiencecontent1')}
                        isCurrent={false}
                    />
                    <TimelineItem
                        content={t('about.experiencecontent2')}
                        isCurrent={false}
                    />
                    <TimelineItem
                        content={t('about.experiencecontent3')}
                        isCurrent={true}
                    />
                    <TimelineItem
                        content={t('about.experiencecontent4')}
                        isCurrent={false}
                    />
                </div>
            </div>

            <div className="bg-white border-2 border-win98-window-border-dark hover:shadow-lg transition-shadow">
                <SectionTitle color="bg-purple-600">{t('about.studiestitle')}</SectionTitle>

                <div className="p-2 md:p-4">
                    <TimelineItem
                        content={t('about.studiescontent1')}
                        isCurrent={true}
                    />
                    <TimelineItem
                        content={t('about.studiescontent2')}
                        isCurrent={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default ExperienceWindow;