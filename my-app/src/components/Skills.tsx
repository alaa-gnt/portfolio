import SkillsIcons from './SkillsIcons'

export default function Skills() { 
    return(
        <div className='pt-10 px-65 flex gap-20'>
            <div className='flex flex-wrap gap-4 max-w-md'>
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
                <div className='text-white flex items-center gap-2'>
                    <span className='text-red-500'>→</span>
                    Full stack Development
                </div>
                <div className='text-white flex items-center gap-2'>
                    <span className='text-red-500'>→</span>
                    Specialized in AI
                </div>
                <div className='text-white flex items-center gap-2'>
                    <span className='text-red-500'>→</span>
                    Mobile dev
                </div>
                <div className='text-white flex items-center gap-2'>
                    <span className='text-red-500'>→</span>
                    Problem solvig
                </div>
            </div>
        </div>
    )
}