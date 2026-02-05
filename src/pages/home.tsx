import orthodoxCross from '/orthodox_cross.svg'
import fotoPerfil from '/foto_perfil.jpg'
import { Suspense } from 'react';

function Home() {

    return (
        <>
            <div className="m-15">
                <Suspense fallback={<div>Loading intro...</div>}>
                    <h1 className='flex mb-5 slide-in-right color-b37d7d font-bold'>
                        Who am I
                    </h1>
                    <div className='flex rounded-md p-4 gap-4 background-b37d7d-color slide-in-left'>
                        <div className='flex rounded-md p-4 gap-4'>
                            <div>
                                <img src={orthodoxCross} className="w-[700px] rounded-sm" alt="Orthodox Cross" />
                            </div>
                            <div className="flex justify-items-center items-center">
                                <p className='text-2xl text-justify color-black font-medium'>
                                    I am Christian who confesses the Orthodox faith. I'm an Information Systems Engineer and I was born in
                                    Bahía Blanca, Argentina on August 4th 1998. I'm also a full-stack developer with a vast experience in 
                                    different technologies and programming languages. I speak Spanish (Native), English (Fluent) and 
                                    some Greek (Beginner).
                                </p>
                            </div>
                            <div>
                                <img src={fotoPerfil} className="w-[660px] rounded-sm" alt="Orthodox Cross" />
                            </div>
                        </div>
                        <a
                        href="https://drive.google.com/file/d/1lTAeS0twYl5lMHWXfc_wPFGdLNZpxLIe/view?usp=drive_link" 
                        target="_blank"
                        className="underline card-overlay">
                        CV
                        </a>
                        
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Home