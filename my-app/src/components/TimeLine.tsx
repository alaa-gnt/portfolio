import TimeLineBox from "./TimeLineBox"

export default function TimeLine() { 
    return (
        <div className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#ee4848] to-transparent transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                {/* First Item - Left Side */}
                <div className="flex justify-start relative">
                    <div className="w-full lg:w-[calc(50%-1.5rem)] lg:pr-6 relative">
                        <TimeLineBox 
                            year={2024}
                            long="1 year"
                            title="Junior Full stack Developer"
                            country="Algeria"
                            location="Personal Projects"
                            description="worked on many personl web and mobile project using react - tailwin - flutter and more"
                            skills={["React", "TypeScript" , "flutter"]}
                            points={["Mobile app clone" , "Portfolio"]}
                            yearColor="text-green-400"
                        />
                        {/* Connection line to center */}
                        <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-[#ee4848] to-transparent transform -translate-y-1/2"></div>
                        {/* Timeline dot */}
                        <div className="hidden lg:block absolute top-1/2 -right-9 w-3 h-3 bg-[#ee4848] rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg"></div>
                    </div>
                </div>

                {/* Second Item - Right Side */}
                <div className="flex justify-end relative">
                    <div className="w-full lg:w-[calc(50%-1.5rem)] lg:pl-6 relative">
                        <TimeLineBox 
                            year={2025}
                            long="1 year"
                            title="CS student"
                            country="Algeria"
                            location="ESI-alger"
                            description="student at on the best computer scince schools in the country"
                            skills={["C", "Algorithmic" , "Assembly" , "Z , hh"]}
                            points={["strong problem solving base" , "advance data structure and algorithms" , "many labs on low programing languages" , "strong foundation on mathematics"]}
                            yearColor="text-blue-400"
                        />
                        {/* Connection line to center */}
                        <div className="hidden lg:block absolute top-1/2 -left-6 w-6 h-0.5 bg-gradient-to-l from-[#ee4848] to-transparent transform -translate-y-1/2"></div>
                        {/* Timeline dot */}
                        <div className="hidden lg:block absolute top-1/2 -left-9 w-3 h-3 bg-[#ee4848] rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg"></div>
                    </div>
                </div>

                {/* Third Item - Left Side */}
                <div className="flex justify-start relative">
                    <div className="w-full lg:w-[calc(50%-1.5rem)] lg:pr-6 relative">
                        <TimeLineBox 
                            year={2024}
                            long="3 year"
                            title="high school study"
                            country="Algeria"
                            location="Mahelma"
                            description="glad to have avrged a very good greed on my final highschool exam after 3 years of hard work"
                            skills={["math", "physics" , "science"]}
                            points={["strong acadimice foundation" , "great at math"]}
                            yearColor="text-purple-400"
                        />
                        {/* Connection line to center */}
                        <div className="hidden lg:block absolute top-1/2 -right-6 w-6 h-0.5 bg-gradient-to-r from-[#ee4848] to-transparent transform -translate-y-1/2"></div>
                        {/* Timeline dot */}
                        <div className="hidden lg:block absolute top-1/2 -right-9 w-3 h-3 bg-[#ee4848] rounded-full transform -translate-y-1/2 -translate-x-1/2 shadow-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


