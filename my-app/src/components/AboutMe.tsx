import { LuMapPin, LuCircle, LuCode, LuCalendar } from "react-icons/lu";
import images from '../assets/images.png'
export default function AboutMe() { 
    return(
        <section className="px-4 sm:px-6 lg:px-8 pb-10 pt-10">
            <div className="max-w-4xl mx-auto">
                <h4 className="text-gray-400 text-sm sm:text-base text-center mb-8 font-light tracking-wide">About me</h4>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-center">

                    <div className="text-center lg:text-left max-w-lg order-2 lg:order-1">
                        <div>
                             <p className="text-white text-2xl sm:text-3xl font-bold font-mono">Hi , I'm</p>
                            <p className="text-[#ee4848] text-2xl sm:text-3xl font-bold font-mono">Guenat Alaa Eddine</p>
                        </div>

                    <div className="flex flex-col gap-3 mt-6">
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> Based on Algeria</div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> 19 Yo </div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCode className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> CS student</div>
                        <div className="flex gap-3 text-gray-400 text-sm sm:text-base justify-center lg:justify-start"><LuCalendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#ee4848] flex-shrink-0" /> +1 year experiance</div>
                    </div>

                        <div className="text-white m-2 max-w-sm text-sm sm:text-base leading-relaxed font-light">
                            Hi, I'm Alaa 👋 <br />  
                            I'm a computer science student passionate about building creative and impactful digital experiences. I'm currently exploring software development, AI, and mobile applications, with a strong interest in solving problems through code. I enjoy learning, experimenting, and turning ideas into real projects that people can use and enjoy.
                        </div>      
                     
                    </div>

                    <div className="order-1 lg:order-2 flex justify-center lg:justify-center w-full lg:w-auto mt-8 lg:mt-16">
                        <img src={images} alt="Profile image" className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl shadow-[#ee4848]/20"/>
                    </div>

                </div>
            </div>
        </section>
    )
}