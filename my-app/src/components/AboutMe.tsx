import { LuMapPin, LuCircle, LuCode, LuCalendar } from "react-icons/lu";
import images from '../assets/images.png'
export default function AboutMe() { 
    return(
        <section className="pl-55 pr-55 pb-10 pt-10">
            <h4 className="text-gray-400">About me</h4>
        <div className="flex gap-20 items-center">

            <div>
                <div>
                     <p className="text-white text-3xl font-bold">Hi , I'm</p>
                    <p className="text-[#ee4848] text-3xl font-bold">Guenat Alaa Eddine</p>
                </div>

            <div className="flex flex-col gap-3  mt-6 ">
                <div className="flex gap-3 text-gray-400"><LuMapPin className="w-5 h-5 text-[#ee4848]" /> Based on Algeria</div>
                <div className="flex gap-3 text-gray-400"><LuCircle className="w-5 h-5 text-[#ee4848]" /> 19 Yo </div>
                <div className="flex gap-3 text-gray-400"><LuCode className="w-5 h-5 text-[#ee4848]" /> CS student</div>
                <div className="flex gap-3 text-gray-400"><LuCalendar className="w-5 h-5 text-[#ee4848]" /> +1 year experiance</div>
            </div>

                <div className="text-white m-2 max-w-sm">
                    Hi, I’m Alaa 👋 <br />  
                    I’m a computer science student passionate about building creative and impactful digital experiences. I’m currently exploring software development, AI, and mobile applications, with a strong interest in solving problems through code. I enjoy learning, experimenting, and turning ideas into real projects that people can use and enjoy.
                </div>      
             
            </div>

            <img src={images} alt="Profile image" className="w-70 h-70"/>

        </div>

        </section>
    )
}