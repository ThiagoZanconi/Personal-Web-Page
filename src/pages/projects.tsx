import ProjectCard from "../components/project_card"

function Projects() {

    const werewolfGameDescription = [ 
        `• Developed an android social game with good use of design and architectural patterns (MVC) and an attractive interface.`,
        `• Tools Used: Kotlin, XML, Android Studio `]

    const ecommerceWebsiteDescription = [
        `• Co-Developed a full-stack online shopping web application specialized in hardware components. Implemented a
        responsive, user-friendly interface for customers and implemented checkout with MercadoPago integration. 
        Provided administrators with a dedicated interface for product additions, deletions, and modifications.`,
        `• Tools Used: NextJS, TypeScript, React, TailwindCSS, HTML, PostreSQL, ExpressJS, MercadoPago API`]
    
    const imageEditorDescription = [
        `• Co-Developed an image editor for image generation and
        modification, assisted by AI, with an algorithmic module for
        basic image editor implementations. `,
        `• Tools Used: Python, NextJS, TypeScript, React, TailwindCSS, HTML, FastAPI`]

    const bibleWebAppDescription = [
        `• Developed a full-stack web application for reading the Bible. 
        It allows to search verses by keywords and to make verse collections for logged users.
        It is built in with a backed API for retriving the info from the database.`,
        `• Tools Used: .NET, JavaScript, C#, Bootstrap, HTML, MySQL, Blazor, APIController, CSS`]

    const bicepStrengthTrackerDescription = [
        `• Participated on the development of a desktop application to track bicep strength. It allows users to upload their 
        bicep workouts videos, and to calculate the bicep curl angle and the number of repetitions with a pose estimation model, 
        providing average force applied in the bicep curls and a graph of the progress over time.`,
        `• Tools Used: Python`]

    const personalWebPageDescription = [
        `• Developed a personal web page to showcase my projects and skills. It has smooth animations, with a responsive design 
        and an attractive interface.`,
        `• Tools Used: React, TypeScript, CSS, TailwindCSS, HTML`]

    return (
        <>
            <section className="overflow-x-hidden">
                <div className="">
                    <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                    Projects
                    </h1>
                    <ProjectCard name="Werewolf Game" link="https://play.google.com/store/apps/details?id=werewolf.view" 
                    link_name="PlayStore Link" description={werewolfGameDescription} slide_class="slide-in-left" />

                    <ProjectCard name="E-commerce Website" link="https://github.com/AlbaErik/Alba-Zanconi-proyecto-nextjs" 
                    link_name="Github Repository" description={ecommerceWebsiteDescription} slide_class="slide-in-left2" />
                    
                    <ProjectCard name="Image generator & editor tool" link="https://github.com/ThiagoZanconi/back-end-proyecto-final" 
                    link_name="Github Repository" description={imageEditorDescription} slide_class="slide-in-left3" />

                    <ProjectCard name="Bible Web App" link="https://github.com/ThiagoZanconi/Bible-Web-App" 
                    link_name="Github Repository" description={bibleWebAppDescription} slide_class="slide-in-left4" />

                    <ProjectCard name="Bicep Strength Tracker App" link="https://github.com/MatiasPericolo/Fisica1-GymTech" 
                    link_name="Github Repository" description={bicepStrengthTrackerDescription} slide_class="slide-in-left5" />

                    <ProjectCard name="Personal Web Page" link="https://github.com/ThiagoZanconi/Personal-Web-Page" 
                    link_name="Github Repository" description={personalWebPageDescription} slide_class="slide-in-left6" />
                </div>
            </section>
        </>
    )
}

export default Projects