import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ content, index }) => {
    const parts = content.split(':');
    const title = parts[0].trim();
    const description = parts.length > 1 ? parts[1].trim() : '';

    const techMatch = description.match(/\(([^)]+)\)/);
    const technologies = techMatch ? techMatch[1].split(', ') : [];

    const cleanDescription = description.replace(/\s*\([^)]*\)\s*/, ' ');

    const colors = [
        'bg-blue-600',
        'bg-green-600',
        'bg-purple-600',
        'bg-red-600',
        'bg-indigo-600'
    ];
    const bgColor = colors[index % colors.length];

    return (
        <div className="mb-3 overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="bg-gray-200 border-2 border-win98-button-face shadow-lg">
                <div className="border-2 border-win98-window-border-dark">
                    <div className={`${bgColor} text-white px-2 py-1 font-bold text-xs md:text-sm overflow-hidden text-ellipsis whitespace-nowrap`}>
                        {title}
                    </div>
                    <div className="bg-white p-2 md:p-3">
                        <p className="text-xs md:text-sm mb-2 break-words leading-relaxed">{cleanDescription}</p>

                        {technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-1 py-0.5 bg-gray-100 border border-win98-window-border-dark shadow-win98-btn hover:bg-gray-200 transition-colors whitespace-nowrap"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectsWindow = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const allProjects = [];
    let i = 1;
    while (t(`about.projectscontent${i}`, { defaultValue: '' }) !== '') {
        allProjects.push(t(`about.projectscontent${i}`));
        i++;
    }

    const filteredProjects = allProjects.filter(project =>
        project.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-full flex flex-col bg-win98-button-face overflow-hidden">
            <div className="p-2 md:p-4 border-b border-gray-300 bg-white z-10">
                <div className="shadow-win98-btn bg-white flex items-center">
                    <input
                        type="text"
                        className="w-full border border-win98-window-border-dark px-2 py-1 focus:outline-none text-xs md:text-sm"
                        placeholder={t('projects.search_placeholder') || "Search projects..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className="px-2 py-1 border-l border-win98-window-border-dark text-xs md:text-sm hover:bg-gray-200 transition-colors"
                            onClick={() => setSearchQuery('')}
                        >
                            X
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col flex-1 overflow-hidden">
                <div className="bg-win98-button-face p-2 md:p-4 z-10">
                    <h2 className="text-base md:text-lg font-bold bg-blue-600 text-white px-2 py-1 rounded-sm truncate">
                        {t('about.projectstitle')}
                    </h2>
                </div>

                <div className="flex-1 overflow-auto p-2 md:p-4 pt-0">
                    {filteredProjects.length > 0 ? (
                        <div className="space-y-1">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={index} content={project} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-3 text-gray-500 bg-white border-2 border-win98-window-border-dark shadow-lg">
                            <p className="text-xs md:text-sm">{t('projects.no_results') || "No projects match your search."}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsWindow;