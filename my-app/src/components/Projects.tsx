import Project from './Project'

export default function Projects() {
    return (
        <section className="py-16 px-4 sm:px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
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
