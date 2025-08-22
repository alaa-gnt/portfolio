import { useRef, useEffect } from 'react';

export default function Main() { 
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bgTextRef.current;
    if (!container) return;
  
    const lines = Array.from(
      container.querySelectorAll<HTMLElement>("[data-speed]")
    );
  
    console.log(lines); 

    const getProgress = () => {
      // smaller divisor = stronger movement
      return window.scrollY / 10;  
    };

    // increase strength multiplier
    const STRENGTH = 8;  

    const update = () => { 
      const progress = getProgress();

      lines.forEach((el) => { 
        const speed = parseFloat(el.dataset.speed || "0")
        const offsetX = progress * STRENGTH * speed;

        el.style.transform =
          `translate(-50%, -50%) rotate(-12deg) translateX(${offsetX}px)`;
      })
    }

    let rafId = 0 ;

    const onScroll = () => { 
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    }

    update()
     
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return ( 
    <div className="relative min-h-screen overflow-hidden">
      <div
        ref ={bgTextRef}
        className="absolute inset-0 z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
                                   <span className="text-white/5 absolute font-black tracking-wider whitespace-nowrap [will-change:transform] 
            text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] top-[12.5%] left-1/2 font-mono px-4"
            data-speed="-1.2"
            style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
            Full Stack Web Dev - Flutter Developer - AI/ML Specialist
          </span>
        
                                   <span className="text-white/5 absolute font-black tracking-wider whitespace-nowrap [will-change:transform] 
            text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] top-1/2 left-1/2 font-mono px-4"
            data-speed="0.8"
            style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
            Creative Developer - C Developer - Problem Solver
          </span>
        
                                   <span className="text-white/5 absolute font-black tracking-wider whitespace-nowrap [will-change:transform] 
            text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] 2xl:text-[5rem] top-[87.5%] left-1/2 font-mono px-4"
            data-speed="-0.6"
            style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
            Mobile App Developer - Web Designer - Tech Enthusiast
          </span>
      </div>

             <main className="flex flex-col justify-center items-center gap-3 sm:gap-5 min-h-screen w-full px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-10">
         <h3 className="text-gray-400 text-sm sm:text-lg font-medium">CREATIVE DEVELOPER</h3>
         <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-center leading-tight sm:leading-none pt-6 sm:pt-10 px-2">
           Crafting Digital Experience <br className="hidden sm:block" /> 
           <span className="block sm:inline">Throw Code and Logic</span>
         </h1>
         <h3 className="text-gray-300 text-center pt-2 sm:pt-3 text-sm sm:text-base lg:text-lg px-4 max-w-2xl">
           Building immersive web experiences that push <br className="hidden sm:block" /> 
           <span className="block sm:inline">the boundaries of what's possible</span>
         </h3>

         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 w-full sm:w-auto">
           <button className="bg-white text-black px-6 sm:px-8 lg:px-11 py-3 sm:py-4 text-center text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors">
             View Work
           </button>

           <button className="bg-black text-white px-6 sm:px-8 lg:px-11 py-3 sm:py-4 text-center text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors">
             Get in Touch
           </button>            
         </div>
       </main>           
    </div>
  )
}
