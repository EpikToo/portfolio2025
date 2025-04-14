import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ content }) => {
    const parts = content.split(':');
    const title = parts[0].trim();
    const description = parts.length > 1 ? parts[1].trim() : '';

    // Extract technologies from description (text between parentheses)
    const techMatch = description.match(/\(([^)]+)\)/);
    const technologies = techMatch ? techMatch[1].split(', ') : [];

    // Clean description without the parentheses part
    const cleanDescription = description.replace(/\s*\([^)]*\)\s*/, ' ');

    return (
        <div className="mb-3 shadow-win98-btn">
            <div className="bg-win98-window-title text-white px-2 py-1 font-bold">
                {title}
            </div>
            <div className="bg-win98-button-face p-3">
                <p className="text-sm mb-2">{cleanDescription}</p>

                {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs bg-white px-2 py-0.5 border border-win98-window-border-dark"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
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
        <div className="h-full flex flex-col bg-white">
            <div className="p-4 border-b border-gray-300">
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
                            className="px-2 py-1 border-l border-win98-window-border-dark text-sm"
                            onClick={() => setSearchQuery('')}
                        >
                            X
                        </button>
                    )}
                </div>
            </div>

            <div className="flex-1 overflow-auto p-4">
                <h2 className="text-lg font-bold mb-4 bg-win98-window-title text-white px-2 py-1">
                    {t('about.projectstitle')}
                </h2>

                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <ProjectCard key={index} content={project} />
                    ))
                ) : (
                    <div className="text-center p-4 text-gray-500">
                        {t('projects.no_results') || "No projects match your search."}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsWindow;