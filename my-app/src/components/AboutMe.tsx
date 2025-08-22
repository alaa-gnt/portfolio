import { LuMapPin, LuCircle, LuCode, LuCalendar } from "react-icons/lu";
import meImage from '../assets/me.png'
export default function AboutMe() { 
    return(
        <section className="px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
            {/* Background Shapes for About Me */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#ee4848]/4 blur-sm"></div>
                <div className="absolute bottom-20 left-8 w-24 h-24 rounded-full bg-[#ee4848]/6 blur-sm"></div>
                <div className="absolute top-1/2 right-20 w-16 h-16 rounded-full bg-[#ee4848]/5 blur-sm"></div>
                <div className="absolute top-32 left-16 w-20 h-12 bg-[#ee4848]/3 rounded-lg blur-sm transform rotate-12"></div>
                <div className="absolute bottom-32 right-32 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-[#ee4848]/4 border-r-[20px] border-r-transparent blur-sm"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <h4 className="text-gray-400 text-sm sm:text-base text-center mb-12 font-light tracking-wide">About me</h4>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">

                    <div className="text-center lg:text-left max-w-xl order-2 lg:order-1">
                        <div>
                             <p className="text-white text-2xl sm:text-3xl font-bold font-mono">Hi , I'm</p>
                            <p className="text-[#ee4848] text-2xl sm:text-3xl font-bold font-mono">Guenat Alaa Eddine</p>
                        </div>

                    <div className="flex flex-col gap-3 mt-8">
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> Based on Algeria</div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> 19 Yo </div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCode className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> CS student</div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> +1 year experience</div>
                    </div>

                        <div className="text-white mt-6 max-w-lg text-sm sm:text-base leading-relaxed font-light">
                            Hi, I'm Alaa 👋 <br />  
                            I'm a computer science student passionate about building creative and impactful digital experiences. I'm currently exploring software development, AI, and mobile applications, with a strong interest in solving problems through code. I enjoy learning, experimenting, and turning ideas into real projects that people can use and enjoy.
                        </div>      
                     
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center w-full lg:w-auto">
                        <div className="relative">
                            <img src={meImage} alt="Profile image" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl shadow-[#ee4848]/20 border-4 border-[#ee4848]/20"/>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ee4848]/10 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}