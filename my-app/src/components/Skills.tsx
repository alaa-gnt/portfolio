import SkillsIcons from './SkillsIcons'

export default function Skills() { 
    return(
        <div className='pt-10 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
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
                        <SkillsIcons name='TenserFlow'/>
                        <SkillsIcons name='pyTorch'/>
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
                            Problem solvig
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}