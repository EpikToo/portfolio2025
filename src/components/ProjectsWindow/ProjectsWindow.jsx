import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ content, index }) => {
    const parts = content.split(':');
    const title = parts[0].trim();
    const description = parts.length > 1 ? parts[1].trim() : '';

    // Extract technologies from description (text between parentheses)
    const techMatch = description.match(/\(([^)]+)\)/);
    const technologies = techMatch ? techMatch[1].split(', ') : [];

    // Clean description without the parentheses part
    const cleanDescription = description.replace(/\s*\([^)]*\)\s*/, ' ');

    // Alternate colors for header background
    const colors = [
        'bg-blue-600',
        'bg-green-600',
        'bg-purple-600',
        'bg-red-600',
        'bg-indigo-600'
    ];
    const bgColor = colors[index % colors.length];

    return (
        <div className="mb-4 overflow-hidden transition-transform hover:scale-[1.01]">
            <div className="bg-gray-200 border-2 border-win98-button-face shadow-lg">
                <div className="border-2 border-win98-window-border-dark">
                    <div className={`${bgColor} text-white px-2 py-1 font-bold text-sm`}>
                        {title}
                    </div>
                    <div className="bg-white p-3">
                        <p className="text-sm mb-3">{cleanDescription}</p>

                        {technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-0.5 bg-gray-100 border border-win98-window-border-dark shadow-win98-btn hover:bg-gray-200 transition-colors"
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

    // Get all projects (assumes projects are numbered from 1 to X)
    const allProjects = [];
    let i = 1;
    while (t(`about.projectscontent${i}`, { defaultValue: '' }) !== '') {
        allProjects.push(t(`about.projectscontent${i}`));
        i++;
    }

    // Filter projects based on search query
    const filteredProjects = allProjects.filter(project =>
        project.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="h-full flex flex-col bg-win98-button-face">
            <div className="p-4 border-b border-gray-300 bg-white">
                <div className="shadow-win98-btn bg-white flex items-center">
                    <input
                        type="text"
                        className="w-full border border-win98-window-border-dark px-2 py-1 focus:outline-none text-sm"
                        placeholder={t('projects.search_placeholder') || "Search projects..."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className="px-2 py-1 border-l border-win98-window-border-dark text-sm hover:bg-gray-200 transition-colors"
                            onClick={() => setSearchQuery('')}
                        >
                            X
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <h2 className="text-lg font-bold mb-4 bg-blue-600 text-white px-2 py-1 rounded-sm">
                    {t('about.projectstitle')}
                </h2>

                {filteredProjects.length > 0 ? (
                    <div className="space-y-1">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} content={project} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center p-4 text-gray-500 bg-white border-2 border-win98-window-border-dark shadow-lg">
                        {t('projects.no_results') || "No projects match your search."}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsWindow;