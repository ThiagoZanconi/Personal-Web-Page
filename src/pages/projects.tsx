function Projects() {

  return (
    <>
        <section className="overflow-x-hidden">
            <div className="m-15">
                <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                Projects
                </h1>
                <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left card mb-5'>
                    <div className="card-content">
                        <p className="text-2xl text-justify color-black font-medium">
                            Werewolf Game
                        </p>
                    </div>
                
                    <a
                    href="https://play.google.com/store/apps/details?id=werewolf.view" 
                    target="_blank"
                    className="underline card-overlay">
                    PlayStore Link
                    </a>
                
                </div>
                <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left2 card mb-5'>
                    <div className="card-content">
                        <p className="text-2xl text-justify color-black font-medium">
                            E-commerce Website
                        </p>
                    </div>
                
                    <a
                    href="https://github.com/AlbaErik/Alba-Zanconi-proyecto-nextjs" 
                    target="_blank"
                    className="underline card-overlay">
                    Github Repository
                    </a>
                
                </div>
                <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left3 card mb-5'>
                    <div className="card-content">
                        <p className="text-2xl text-justify color-black font-medium">
                            Image generator & editor tool
                        </p>
                    </div>
                
                    <a
                    href="https://github.com/ThiagoZanconi/back-end-proyecto-final" 
                    target="_blank"
                    className="underline card-overlay">
                    Github Repository
                    </a>
                </div>

                <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left4 card mb-5'>
                    <div className="card-content">
                        <p className="text-2xl text-justify color-black font-medium">
                            Bible Web App
                        </p>
                    </div>
                
                    <a
                    href="https://github.com/ThiagoZanconi/Bible-Web-App" 
                    target="_blank"
                    className="underline card-overlay">
                    Github Repository
                    </a>
                </div>

                <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left5 card mb-5'>
                    <div className="card-content">
                        <p className="text-2xl text-justify color-black font-medium">
                            Bicep Strength Tracker App
                        </p>
                    </div>
                
                    <a
                    href="https://github.com/MatiasPericolo/Fisica1-GymTech" 
                    target="_blank"
                    className="underline card-overlay">
                    Github Repository
                    </a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Projects