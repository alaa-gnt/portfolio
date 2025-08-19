import TimeLineBox from "./TimeLineBox"

export default function TimeLine() { 
    return (
        <div className="relative py-10 px-4">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#ee4848] transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
                {/* First Item - Left Side */}
                <div className="flex justify-start">
                    <div className="w-5/12 pl-60" style={{ marginRight: 'auto', marginLeft: '0' }}>
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
                    </div>
                </div>

                {/* Second Item - Right Side */}
                <div className="flex justify-end">
                    <div className="w-5/12 pl-2">
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
                    </div>
                </div>

                {/* Third Item - Left Side */}
                <div className="flex justify-start">
                    <div className="w-5/12 pl-60" style={{ marginRight: 'auto', marginLeft: '0' }}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}


