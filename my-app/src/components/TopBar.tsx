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
      className={`fixed top-0 left-0 w-full p-5 flex justify-between transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/30" 
          : "bg-transparent"
      }`}
    >
      <h1 className="text-white pl-10 font-bold text-lg">
        <a href="#">AL</a>
      </h1>
      <ul className="flex gap-5 text-white items-center pr-10">
        <li><a href="#">WORK</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
        <button className="bg-white p-2 rounded-full flex items-center justify-center">
          <LuMoon className="w-5 h-5 text-black" />
        </button>
      </ul>
    </nav>
  );
}
