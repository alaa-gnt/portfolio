import Project from './Project'

export default function Projects() {
    return (
        <section className="py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
            {/* Background Shapes for Projects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-16 w-36 h-36 rounded-full bg-[#ee4848]/2 blur-sm"></div>
                <div className="absolute bottom-24 left-20 w-24 h-24 rounded-full bg-[#ee4848]/4 blur-sm"></div>
                <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full bg-[#ee4848]/3 blur-sm"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-[#ee4848]/2 rounded-lg blur-sm transform rotate-45"></div>
                <div className="absolute top-2/3 right-1/3 w-0 h-0 border-l-[18px] border-l-transparent border-b-[28px] border-b-[#ee4848]/3 border-r-[18px] border-r-transparent blur-sm"></div>
                <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-[#ee4848]/5 blur-sm"></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-white text-3xl sm:text-4xl font-bold text-center mb-12">
                    My Projects
                </h2>
                
                <div className="space-y-16">
                    <Project 
                        category="Interactive Website"
                        year={2025}
                        title="Modern Portfolio"
                        description="Full-featured modern portfolio that shows introduction about me and projects I worked on"
                        technologies={["React", "Tailwind", "TypeScript"]}
                        imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                        imageAlt="Modern portfolio website screenshot"
                        projectUrl="https://github.com/your-portfolio"
                    />
                    
                    <Project 
                        category="Kaggle Challenges"
                        year={2024}
                        title="Kaggle Problems"
                        description="Following my passion for data science and AI, I have worked on many Kaggle problems"
                        technologies={["Python", "Notebook", "Pandas", "NumPy", "TensorFlow", "PyTorch"]}
                        imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                        imageAlt="Data science and machine learning workspace"
                        projectUrl="https://github.com/your-kaggle"
                    />
                </div>
            </div>
        </section>
    )
}
