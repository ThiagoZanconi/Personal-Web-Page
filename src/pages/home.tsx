import orthodoxCross from '/orthodox_cross.svg'
import fotoPerfil from '/foto_perfil.jpg'
import AbilityCard from '../components/ability_card'

function Home() {
    let technicalSkills = ["Clean Code","Data Structures", "SOLID", "Design Patterns", "Arquitectural Patterns", "JSON",
        "Agile Methodologies", "Git"]

    let frontEndSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "Vite", "XML",
        "Blazor"]
        
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
                        <div className='xl:flex items-center gap-3 card-content xl:pr-14'>
                            <div>
                                <img src={orthodoxCross} className="w-[200px] xl:w-[900px] rounded-sm mx-auto my-3" alt="Orthodox Cross" />
                            </div>
                            <p className="text-xl md:text-2xl lg:text-3xl text-black font-serif font-semibold xl:mr-12 leading-snug text-left">
                                Christian, Eastern Orthodox by faith.
                                <br /><br />
                                Information Systems Engineer from Bahía Blanca, Argentina.
                                Full-stack developer with experience in a wide range of technologies 
                                and programming languages.
                                <br /><br />
                                Languages: Spanish (native), English (fluent), Greek (basic).
                            </p>

                            <div>
                                <img src={fotoPerfil} className="w-[200px] xl:w-[860px] rounded-sm mx-auto my-3" alt="Profile Photo" />
                            </div>
                        </div>
                        <div className="card-overlay flex py-auto justify-around items-center">
                            <a href="https://drive.google.com/file/d/1lTAeS0twYl5lMHWXfc_wPFGdLNZpxLIe/view?usp=drive_link" target="_blank"
                            className="w-[40%] h-[20%] flex items-center justify-center background-pinkish-color-hover color-black font-bold">
                            CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 my-10">
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