import React from 'react';
//import Image from 'next/image';
import { CldImage } from 'next-cloudinary';


interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl: string;
    repoUrl?: string;
    tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, repoUrl, tags}) => {
    return (
        <a
            href = {repoUrl || '#'}
            target = "_blank"
            className = "group flex flex-col w-full h-full bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-md transition-all duration-500 rounded-2xl overflow-hidden border border-white/[0.08] hover:border-[#00B3B0]/40 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:shadow-[0_8px_32px_rgba(0,179,176,0.15)] hover:-translate-y-1"
        >
            {/* Image Section */}
            <div className="w-full h-64 bg-transparent relative overflow-hidden flex items-center justify-center border-b border-white/[0.06]">
                <div className="relative w-[90%] h-[85%] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1 rounded-t-lg overflow-hidden">
                    <CldImage
                        src = {imageUrl}
                        alt = {title}
                        width={400}
                        height={300}
                        sizes='(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw'

                        className="object-cover object-top w-full h-full"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-tech font-bold text-white group-hover:text-[#00B3B0] transition-colors">
                        {title}
                    </h3>
                    {/* Icono de flecha */}
                    <div className="bg-white/10 text-white rounded-full p-2.5 transform transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#00B3B0] group-hover:text-black shadow-inner">
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
