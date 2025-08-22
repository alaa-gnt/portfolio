import TimeLineBox from "./TimeLineBox"

export default function TimeLine() { 
    return (
        <div className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Timeline Header */}
                <div className="text-center mb-16">
                    <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">My Journey</h2>
                    <p className="text-gray-400 text-lg">The path that led me here</p>
                </div>

                {/* Timeline Cards - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Card 1 */}
                    <div className="relative animate-fade-in-up group" style={{ animationDelay: '0.1s' }}>
                        <div className="bg-gradient-to-b from-[#ee4848]/10 to-transparent p-1 rounded-2xl transition-all duration-500 group-hover:from-[#ee4848]/20 group-hover:scale-105">
                            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4 transition-all duration-500 group-hover:bg-black/60">
                                <TimeLineBox 
                                    year={2024}
                                    long="1 year"
                                    title="Junior Full stack Developer"
                                    country="Algeria"
                                    location="Personal Projects"
                                    description="worked on many personal web and mobile projects using react - tailwind - flutter and more"
                                    skills={["React", "TypeScript" , "flutter"]}
                                    points={["Mobile app clone" , "Portfolio"]}
                                    yearColor="text-green-400"
                                />
                            </div>
                        </div>
                        {/* Year Badge */}
                        <div className="absolute -top-4 -right-4 bg-[#ee4848] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            2024
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative">
                        <div className="bg-gradient-to-b from-[#ee4848]/10 to-transparent p-1 rounded-2xl">
                            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                                <TimeLineBox 
                                    year={2025}
                                    long="1 year"
                                    title="CS student"
                                    country="Algeria"
                                    location="ESI-alger"
                                    description="student at one of the best computer science schools in the country"
                                    skills={["C", "Algorithmic" , "Assembly" , "Z , hh"]}
                                    points={["strong problem solving base" , "advanced data structures and algorithms" , "many labs on low programming languages" , "strong foundation on mathematics"]}
                                    yearColor="text-blue-400"
                                />
                            </div>
                        </div>
                        {/* Year Badge */}
                        <div className="absolute -top-4 -right-4 bg-[#ee4848] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            2025
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative">
                        <div className="bg-gradient-to-b from-[#ee4848]/10 to-transparent p-1 rounded-2xl">
                            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                                <TimeLineBox 
                                    year={2024}
                                    long="3 year"
                                    title="high school study"
                                    country="Algeria"
                                    location="Mahelma"
                                    description="glad to have achieved a very good grade on my final high school exam after 3 years of hard work"
                                    skills={["math", "physics" , "science"]}
                                    points={["strong academic foundation" , "great at math"]}
                                    yearColor="text-purple-400"
                                />
                            </div>
                        </div>
                        {/* Year Badge */}
                        <div className="absolute -top-4 -right-4 bg-[#ee4848] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            2024
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
