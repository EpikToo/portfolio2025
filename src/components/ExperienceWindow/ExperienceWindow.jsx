import React from 'react';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ content, isCurrent }) => {
    const parts = content.split('->');

    return (
        <div className="mb-4 pb-2 border-b border-gray-200 last:border-0">
            <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 font-bold text-sm mb-1 sm:mb-0">
                    {parts[0].trim()}
                </div>
                <div className="sm:w-2/3 text-sm">
                    <span>{parts[1].trim()}</span>
                    {isCurrent && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded shadow-win98-btn">
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
        <div className="h-full overflow-auto bg-white p-4">
            <div className="mb-6">
                <h2 className="text-lg font-bold mb-4 bg-win98-window-title text-white px-2 py-1">
                    {t('about.experiencetitle')}
                </h2>

                <div className="shadow-win98-btn bg-win98-button-face p-3">
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

            <div className="mb-6">
                <h2 className="text-lg font-bold mb-4 bg-win98-window-title text-white px-2 py-1">
                    {t('about.studiestitle')}
                </h2>

                <div className="shadow-win98-btn bg-win98-button-face p-3">
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