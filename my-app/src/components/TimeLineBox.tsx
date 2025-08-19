interface TimeLineBoxProps {
    year: string | number;
    long: string;
    title: string;
    country: string;
    location: string;
    description: string;
    points: string[];
    skills: string[];
    yearColor?: string; // Optional custom color for the year
}

export default function TimeLineBox({
    year,
    long,
    title,
    country,
    location,
    description,
    points,
    skills,
    yearColor = "text-blue-400" // Default color if none provided
}: TimeLineBoxProps) {
    return (
        <div className="border border-[#ee4848] p-8 rounded-xl max-w-xs bg-[#0a0a0a]/50 backdrop-blur-sm transition-all duration-300 hover:border-[#ff6b6b] hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b6b]/40">
           
            {/* Header with year and duration */}
            <div className="flex gap-3 items-center mb-4">
                <h1 className={`${yearColor} font-bold text-2xl drop-shadow-lg transition-all duration-300 hover:scale-110 hover:drop-shadow-xl`}>{year}</h1>
                <span className="text-gray-400 text-sm">{long}</span>
            </div>

            {/* Title */}
            <h2 className="text-white font-semibold text-xl mb-2 relative group transition-all duration-300 hover:text-[#ff6b6b] overflow-hidden">
                {title}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff6b6b] transition-all duration-300 group-hover:w-full"></div>
            </h2>

            {/* Location */}
            <p className="text-gray-300 text-sm mb-3">{country}, {location}</p>

            {/* Description */}
            <p className="text-white text-sm mb-4 leading-relaxed">{description}</p>

            {/* Key Points */}
            {points.length > 0 && (
                <div className="mb-4">
                    <h3 className="text-white font-medium text-sm mb-2">Key Points:</h3>
                    <ul className="text-white text-sm space-y-1">
                        {points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 group cursor-pointer">
                                <span className="text-red-500 text-xs mt-1 transition-transform duration-300 group-hover:rotate-90">→</span>
                                <span className="transition-colors duration-300 group-hover:text-[#ff6b6b]">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <div>
                    <h3 className="text-white font-medium text-sm mb-2">Skills:</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="text-blue-400 text-xs bg-blue-900/20 px-2 py-1 rounded-full border border-blue-800/30">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
