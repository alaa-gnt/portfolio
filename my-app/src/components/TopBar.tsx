// exporting the useEffect react hook to detect the scroling 
import { useEffect, useState } from "react";
import { LuMoon } from "react-icons/lu";


export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 sm:p-4 lg:p-5 flex justify-between transition-all duration-300 z-50 ${
        scrolled
          ? "backdrop-blur-md bg-black/30" 
          : "bg-transparent"
      }`}
    >
      <h1 className="text-white pl-4 sm:pl-6 lg:pl-10 font-bold text-base sm:text-lg">
        <a href="#">AL</a>
      </h1>
      <ul className="flex gap-3 sm:gap-4 lg:gap-5 text-white items-center pr-4 sm:pr-6 lg:pr-10">
  <li className="text-sm sm:text-base"><a href="#work" onClick={e => {e.preventDefault(); document.getElementById('work')?.scrollIntoView({behavior: 'smooth'});}}>WORK</a></li>
  <li className="text-sm sm:text-base"><a href="#about" onClick={e => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});}}>ABOUT</a></li>
  <li className="text-sm sm:text-base"><a href="#contact" onClick={e => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});}}>CONTACT</a></li>
        <button className="bg-white p-1.5 sm:p-2 rounded-full flex items-center justify-center">
          <LuMoon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
        </button>
      </ul>
    </nav>
  );
}
