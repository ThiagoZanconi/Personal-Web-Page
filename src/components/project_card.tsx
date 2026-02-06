import { useState } from "react";

type ProjectCardProps = {
    name: string,
    link: string,
    link_name: string,
    description: string [],
    slide_class: string
}

function ProjectCard({ name, link, link_name, description, slide_class }: ProjectCardProps) {

    const [showDescription, setShowDescription] = useState(false);

    function handleDescriptionClick() {
        setShowDescription(!showDescription);
    }

    return (
        <>
            <div className={`flex rounded-md p-4 gap-4 background-b37d7d-color ${slide_class} card mb-3`}>
                <div className="card-content">
                    <p className="text-3xl text-justify color-black font-medium">
                        {name}
                    </p>
                </div>
                    
                <div className="card-overlay flex py-auto justify-around items-center">
                    <a onClick={handleDescriptionClick} 
                    className="w-full h-full flex items-center justify-center background-pinkish-color-hover color-black font-bold">
                        Description
                    </a>
                    <a href={link} target="_blank" 
                    className="w-full h-full flex items-center justify-center background-pinkish-color-hover color-black font-bold text-center">
                        {link_name}
                    </a>
                </div>
            </div>
                <>
                    <div className="overflow-y-hidden">
                        <div className={`px-10 mb-3 background-skin-color expand ${showDescription ? "show" : ""}`}>
                            {description.map((desc, _) => (
                                <p className="text-xl md:text-justify color-black font-medium"> 
                                    {desc}
                                    <br></br>
                                </p>
                            ))}
                        </div>
                    </div>
                </>
         </>
    )
}

export default ProjectCard