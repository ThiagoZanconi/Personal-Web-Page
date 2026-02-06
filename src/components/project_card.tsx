import { useState } from "react";

type ProjectCardProps = {
    name: string,
    link: string,
    link_name: string,
    description: string,
    slide_class: string
}

function ProjectCard({ name, link, link_name, description, slide_class }: ProjectCardProps) {

    const full_size_description = "w-full h-full";
    const closed_description = "w-0 h-0 overflow-hidden";
    let descriptionVisible = false;
    const [descriptionClass, setDescriptionClass] = useState(closed_description);

    function handleDescriptionClick() {
        if(descriptionVisible) {
            setDescriptionClass(closed_description);
            descriptionVisible = false;
        } else {
            setDescriptionClass(full_size_description);
            descriptionVisible = true;
        }
    }

    return (
        <>
            <div className={`flex rounded-md p-4 gap-4 background-b37d7d-color ${slide_class} card mb-5`}>
                <div className="card-content">
                    <p className="text-3xl text-justify color-black font-medium">
                        {name}
                    </p>
                </div>
                    
                <div className="card-overlay flex py-auto justify-around items-center">
                    <a onClick={handleDescriptionClick} className="w-full h-full flex items-center justify-center background-pinkish-color-hover color-black">
                        Description
                    </a>
                    <a href={link} target="_blank" 
                    className="w-full h-full flex items-center justify-center background-pinkish-color-hover color-black">
                        {link_name}
                    </a>
                </div>
            </div>
            <p className={`${descriptionClass}`}>
                Description goes here.
                <br/>
                <br/>
                <br/>
                More Description.
            </p>
         </>
    )
}

export default ProjectCard