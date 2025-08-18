export default function Main() { 
    return ( 
        <div>

        <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden " aria-hidden="true">
            <span className="text-white/5 absolute font-extrabold tracking-tight whitespace-nowrap [will-change:transform] 
            text-[3rem] lg:text-[4rem] xl:text-[5rem] transform -rotate-12 top-1/8 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                Full Stack Web Dev - Flutter Developer - AI/ML Specialist</span>
            
            <span className="text-white/5 absolute font-extrabold tracking-tight whitespace-nowrap [will-change:transform] 
            text-[3rem] lg:text-[4rem] xl:text-[5rem] transform -rotate-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                Creative Developer - C Developer - Problem Solver</span>
            
            <span className="text-white/5 absolute font-extrabold tracking-tight whitespace-nowrap [will-change:transform] 
            text-[3rem] lg:text-[4rem] xl:text-[5rem] transform -rotate-12 top-7/8 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                Mobile App Developer - Web Designer - Tech Enthusiast</span>
        </div>

         <main className="flex flex-col justify-center items-center gap-5 min-h-screen w-full -mt-12 relative z-10">
            <h3 className="text-gray-400 text-lg">CREATIVE DEVELOPER</h3>
            <h1 className="text-white text-8xl text-center gap-1 pt-10">
                Crafting Digital Experience <br /> Throw Code and Logic
            </h1>
            <h3 className="text-gray-300 text-center pt-3">
                Building immersive web experience that push <br /> the boundaries of what's possible 
            </h3>

            <div className="flex pt-8">
                <button className="bg-white text-black px-11 py-4 text-center">
                    View Work
                </button>

                <button className="bg-black text-white px-11 py-4 text-center">
                    Get in Touch
                </button>            
            </div>
        </main>           
        
        </div>

    )
}
