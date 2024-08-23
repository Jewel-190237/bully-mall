import Image from 'next/image';
import React from 'react';

const OurFeature = () => {
    return (
        <section>
            <div className='lg:w-2/5 mx-auto mt-20'>
                <div className=' '>
                    <div className='flex flex-col'>
                        <Image className='mx-auto' src='/camp.svg' height={50} width={50} alt='feature'></Image>
                    </div>
                    <div>
                        <h1 className='text-center -mt-2 text-6xl font-extrabold text-black '>Our Feature</h1>
                    </div>
                </div>
            </div>

            <div className="mt-10 mb-60 w-full bg-cover bg-center bg-no-repeat p-0 md:p-4 lg:p-10 h-[220px] md:h-[300px] lg:h-[550px] rounded-xl" style={{ backgroundImage: "url('/feature-bg.png')" }}>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='hidden lg:flex'>
                        <Image className='rotate-12' src='/phone.png ' height={400} width={400} alt='phone'></Image>
                    </div>
                    <div className='col-span-2'>
                    </div>
                </div>

            </div>

        </section>
    );
};


export default OurFeature;