import workExperienceIcon from '../assets/work-experience-3.svg';

function Experience() {

    return (
        <>
            <div className="w-full">
                <h1 className='flex mb-5 slide-in-right'>
                    Experience
                </h1>
                <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left'>
                    <div>
                        <img src={workExperienceIcon} className="h-[300px] rounded-sm" alt="Orthodox Cross" />
                    </div>
                    <div className="flex justify-items-center items-center">
                        <p className='text-2xl text-justify'>
                            Worked at LivePanel from April 20th 2025 to Agugust 30th 2025 as a Full-Stack Developer intern.
                            <br />
                            Developed a feature for processing user demographic information and making predictions using 
                            machine learning.
                            <br />
                            Used Technologies: Python, MySql, Angular, Postman.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience