import studyIcon from '../assets/study_icon.svg';

function Studies() {

    return (
        <>
            <section className="overflow-x-hidden">
                <div className="">
                    <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                        Studies
                    </h1>
                    <div className='lg:flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left'>
                        <div>
                            <img src={studyIcon} className="mx-auto h-[200px] lg:h-[300px] rounded-sm" alt="Orthodox Cross" />
                        </div>
                        <div className="flex justify-items-center items-center">
                            <p className='sm:text-xl md:text-2xl lg:text-4xl color-black font-semibold leading-snug text-left'>
                                Graduated as an Information Systems Engineer from the National University of the South, 
                                Bahía Blanca - Argentina,
                                2017 - 2025. 
                                <br /> <br />
                                Completed  AWS Cloud Practicioner Essentials Course on December 30th, 2025.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Studies