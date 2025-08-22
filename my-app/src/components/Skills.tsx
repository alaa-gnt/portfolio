import SkillsIcons from './SkillsIcons'

export default function Skills() { 
    return(
        <div className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
            {/* Background Shapes for Skills */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-16 left-12 w-28 h-28 rounded-full bg-[#ee4848]/3 blur-sm"></div>
                <div className="absolute bottom-16 right-12 w-20 h-20 rounded-full bg-[#ee4848]/5 blur-sm"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-[#ee4848]/4 blur-sm"></div>
                <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-[#ee4848]/2 rounded-lg blur-sm transform -rotate-6"></div>
                <div className="absolute top-1/3 right-1/4 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-[#ee4848]/3 border-r-[15px] border-r-transparent blur-sm"></div>
            </div>
            
            <div className='max-w-4xl mx-auto relative z-10'>
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center'>
                    <div className='flex flex-wrap gap-3 sm:gap-4 justify-center max-w-md'>
                        <SkillsIcons name='React'/>
                        <SkillsIcons name='TypeScript'/>
                        <SkillsIcons name='Next.js'/>
                        <SkillsIcons name='TailwindCss'/>
                        <SkillsIcons name='C'/>
                        <SkillsIcons name='Dart'/>
                        <SkillsIcons name='Flutter'/>
                        <SkillsIcons name='ML/DL'/>
                        <SkillsIcons name='Pandas'/>
                        <SkillsIcons name='TensorFlow'/>
                        <SkillsIcons name='PyTorch'/>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='text-white flex items-center gap-2 text-sm sm:text-base font-light'>
                            <span className='text-red-500 font-bold'>→</span>
                            Full stack Development
                        </div>
                        <div className='text-white flex items-center gap-2 text-sm sm:text-base font-light'>
                            <span className='text-red-500 font-bold'>→</span>
                            Specialized in AI
                        </div>
                        <div className='text-white flex items-center gap-2 text-sm sm:text-base font-light'>
                            <span className='text-red-500 font-bold'>→</span>
                            Mobile dev
                        </div>
                        <div className='text-white flex items-center gap-2 text-sm sm:text-base font-light'>
                            <span className='text-red-500 font-bold'>→</span>
                            Problem solving
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}