import orthodoxCross from '/orthodox_cross.svg'
import fotoPerfil from '/foto_perfil.jpg'
import AbilityCard from '../components/ability_card'

function Home() {
    let technicalSkills = ["Clean Code","Data Structures", "SOLID", "Design Patterns", "Arquitectural Patterns", "JSON",
        "Agile Methodologies", "Git"]
    let frontEndSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "XML",
        "Blazor"
    ]
    let backEndSkills = [".Net", "Node.js", "Express.js", "Django", "REST APIs","SQL", 
        "PostgreSQL", "MySQL", "Phyton", "C#", "C", "Java", "Kotlin"]
    let generalSkills = ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Time Management", "Creativity", 
        "Collaboration", "Continuous Learning"]
    return (
        <>
            <div className="overflow-x-hidden">
                    <div className="slide-in-right">
                        <h1 className="mb-5 color-b37d7d font-bold">
                            Who am I
                        </h1>
                    </div>
                    <div className='rounded-md p-4 background-b37d7d-color slide-in-left card'>
                        <div className='flex items-center gap-3 card-content pr-14'>
                            <div>
                                <img src={orthodoxCross} className="w-[900px] rounded-sm" alt="Orthodox Cross" />
                            </div>
                            <p className='text-4xl text-justify color-black font-medium mr-12'>
                                I am a Christian who confesses the Orthodox faith.
                                <br />
                                I'm an Information Systems Engineer and was born in
                                Bahía Blanca, Argentina on August 4th 1998. I'm also a full-stack developer with a vast experience in 
                                different technologies and programming languages. I speak Spanish (Native), English (Fluent) and 
                                some Greek (Beginner).
                            </p>
                            <div>
                                <img src={fotoPerfil} className="w-[860px] rounded-sm" alt="Profile Photo" />
                            </div>
                        </div>
                        <a href="https://drive.google.com/file/d/1lTAeS0twYl5lMHWXfc_wPFGdLNZpxLIe/view?usp=drive_link" target="_blank"
                        className="underline card-overlay">
                        CV
                        </a>
                    </div>

                    <div className="grid grid-cols-4 gap-10 my-10">
                        <AbilityCard name='Technical' skills = {technicalSkills} />
                        <AbilityCard name="Front-End" skills = {frontEndSkills} />
                        <AbilityCard name="Back-End" skills = {backEndSkills} />
                        <AbilityCard name="General" skills = {generalSkills} />
                    </div>
            </div>
        </>
    )
}

export default Home