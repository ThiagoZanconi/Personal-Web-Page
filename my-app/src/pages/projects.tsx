function Projects() {

  return (
    <>
    <div className="">
        <h1 className='flex mb-5 slide-in-right'>
          Projects
        </h1>
        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card mb-5'>
            <div className="card-content">
                <p className="text-2xl text-justify">
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
        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card mb-5'>
            <div className="card-content">
                <p className="text-2xl text-justify">
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
        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card mb-5'>
            <div className="card-content">
                <p className="text-2xl text-justify">
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

        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card mb-5'>
            <div className="card-content">
                <p className="text-2xl text-justify">
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

        <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left card mb-5'>
            <div className="card-content">
                <p className="text-2xl text-justify">
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
      
    </>
  )
}

export default Projects