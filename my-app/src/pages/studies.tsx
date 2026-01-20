function Studies() {

    return (
        <>
            <div className="w-full">
                <h1 className='flex mb-5 slide-in-right'>
                    Studies
                </h1>
                <div className='flex border-2 border-red-900 rounded-md p-4 gap-4 bg-gray-800 slide-in-left'>
                    <div>
                        <img src="/study_icon.svg" className="h-[300px] rounded-sm" alt="Orthodox Cross" />
                    </div>
                    <div className="flex justify-items-center items-center">
                        <p className='text-2xl text-justify'>
                            Graduated as an Information Systems Engineer from the National University of the South, 
                            Bahía Blanca - Argentina,
                            2017 - 2025. 
                            <br /> <br />
                            Completed  AWS Cloud Practicioner Essentials Course on December 30th, 2025.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studies