import workExperienceIcon from '../assets/work-experience-3.svg';

function Experience() {

    return (
        <>
            <section className="overflow-x-hidden">
                <div className="">
                    <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                        Experience
                    </h1>
                    <div className='lg:flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left'>
                        <div>
                            <img src={workExperienceIcon} className="mx-auto h-[200px] lg:h-[300px] rounded-sm" alt="Orthodox Cross" />
                        </div>
                        <div className="flex justify-items-center items-center">
                            <p className='sm:text-xl md:text-2xl lg:text-4xl color-black font-semibold leading-snug text-left'>
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
            </section>
        </>
    )
}

export default Experience