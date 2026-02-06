import ProjectCard from "../components/project_card"

function Projects() {

  return (
    <>
        <section className="overflow-x-hidden">
            <div className="">
                <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                Projects
                </h1>
                <ProjectCard name="Werewolf Game" link="https://play.google.com/store/apps/details?id=werewolf.view" 
                link_name="PlayStore Link" description="" slide_class="slide-in-left" />

                <ProjectCard name="E-commerce Website" link="https://github.com/AlbaErik/Alba-Zanconi-proyecto-nextjs" 
                link_name="Github Repository" description="" slide_class="slide-in-left2" />
                
                <ProjectCard name="Image generator & editor tool" link="https://github.com/ThiagoZanconi/back-end-proyecto-final" 
                link_name="Github Repository" description="" slide_class="slide-in-left3" />

                <ProjectCard name="Bible Web App" link="https://github.com/ThiagoZanconi/Bible-Web-App" 
                link_name="Github Repository" description="" slide_class="slide-in-left4" />

                <ProjectCard name="Bicep Strength Tracker App" link="https://github.com/MatiasPericolo/Fisica1-GymTech" 
                link_name="Github Repository" description="" slide_class="slide-in-left5" />

                <ProjectCard name="Personal Web Page" link="https://github.com/ThiagoZanconi/Personal-Web-Page" 
                link_name="Github Repository" description="" slide_class="slide-in-left6" />
                
            </div>
        </section>
    </>
  )
}

export default Projects