import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string | StaticImageData;
    repoUrl?: string;
    tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, repoUrl, tags}) => {
    return (
        <a
            href = {repoUrl || '#'}
            target = "_blank"
            rel = "noopener noreferrer"
            className = "group flex flex-col w-full h-full bg-[#111] hover:bg-[#1a1a1a] transition-colors duration-300 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600"
        >
            {/* Image Section */}
            <div className="w-full h-64 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                <div className="relative w-[90%] h-[85%] shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 rounded-t-lg overflow-hidden">
                    <Image
                        src = {imageUrl}
                        alt = {title}
                        fill
                        className="object-cover object-top"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00B3B0] transition-colors">
                        {title}
                    </h3>
                    {/* Icono de flecha */}
                    <div className="bg-black text-white rounded-full p-2 transform transition-transform duration-300 group-hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {description}   
                </p>

                {/* Tags Section */}
                {tags && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-[#00B3B0]/10 text-[#00B3B0] border border-[#00B3B0]/20">
                            {tag}
                        </span>
                    ))}
                    </div>   
                )}
            </div>
        </a>
    );
};

export default ProjectCard;
