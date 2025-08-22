interface ProjectProps {
    category: string;
    year: string | number;
    title: string;
    description: string;
    technologies: string[];
    imageSrc: string;
    imageAlt: string;
    projectUrl?: string; // Optional project URL
}

export default function Project({
    category,
    year,
    title,
    description,
    technologies,
    imageSrc,
    imageAlt,
    projectUrl
}: ProjectProps) {
    return (
        <div className="p-6 rounded-xl transition-all duration-300 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 justify-center items-center">
                <div className="flex-1 space-y-6 max-w-lg">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>{category}</span>
                        <span>•</span>
                        <span>{year}</span>
                    </div>

                    <h3 className="text-white font-semibold text-xl lg:text-2xl">
                        {title}
                    </h3>

                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span key={index} className="text-blue-400 text-xs bg-blue-900/20 px-2 py-1 rounded-full border border-blue-800/30">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {projectUrl && (
                        <button className="bg-[#ee4848] text-white px-4 py-2 rounded-lg hover:bg-[#ff6b6b] transition-colors duration-200 text-sm">
                            View Project
                        </button>
                    )}
                </div>
                
                <div className="flex-1 flex justify-center">
                    <div className="relative group cursor-pointer">
                        <img 
                            src={imageSrc} 
                            alt={imageAlt} 
                            className="w-full max-w-md h-auto rounded-lg object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <div className="bg-black/70 rounded px-3 py-1">
                                <span className="text-white text-sm font-medium">View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}