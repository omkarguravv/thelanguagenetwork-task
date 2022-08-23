import React from 'react'
import FRENCH from './images/All-languages_FRENCH.svg'

function ThirdPage() {
    return (
        <>

            <h1 className='text-[#13BFAB]  px-10 font-semibold text-sm lg:text-3xl'>
                Is learning French worth it?

            </h1>

            <div className='flex justify-center lg:py-4  '>
                <div className='lg:w-1/2 ' >
                    <img src={FRENCH} alt="" />
                </div>
            </div>

            <div className='flex justify-center px-10 font-thin lg:font-medium ' >
                <p>Learning any language is worth your time! Whether it’s French or another language, learning a language allows you to connect with people from all over the world, experience different cultures and help with a bit of brain training all at the same time! We’re living in an increasingly globalised world, so learning another language like French can help you to boost your career and the likelihood of finding a new job, make travelling much easier and it opens you up to a world of new entertainment, like music, art, books and films. Trust us, it's definitely worth it.</p>
            </div>

            <div className='py-6 px-10 font-thin lg:font-medium'>
                <h3>

                    But outside of that, there are several more top reasons to learn French:
                </h3>
            </div>

            <div className='px-3'>
                <div className=' my-5 mt-3 flex flex-row  '>
                    <div className='bg-[#13BFAB] rounded-full  lg:rounded-full h-6 w-10 mx-2   lg:w-6 lg:h-6  lg:mx-3 text-center '>1</div>
                    <div className='font-thin lg:font-medium'>
                        French is the official language of 29 countries. Open up those travel plans, y’all!
                    </div>
                </div>
               
                <div className=' my-5 mt-3 flex flex-row  '>
                    <div className='bg-[#13BFAB] rounded-full  lg:rounded-full h-6 w-10 mx-2   lg:w-6 lg:h-6  lg:mx-3 text-center '>2</div>
                    <div className='font-thin lg:font-medium'>
                    Learn about new cultures from around the globe: whether it’s cooking, fashion, theatre, arts or
         architecture, French offers access to a world of new interests.
                    </div>
                </div>
               
                <div className=' my-5 mt-3 flex flex-row  '>
                    <div className='bg-[#13BFAB] rounded-full  lg:rounded-full h-6 w-10 mx-2   lg:w-6 lg:h-6  lg:mx-3 text-center '>3</div>
                    <div className='font-thin lg:font-medium'>
                    French is a ‘romance’ language. That means it’ll get you closer to learning other languages like
         Spanish, Italian and Portuguese. Bonus! 
                    </div>
                </div>
               
                <div className=' my-5 mt-3 flex flex-row  '>
                    <div className='bg-[#13BFAB] rounded-full  lg:rounded-full h-6 w-10 mx-2   lg:w-6 lg:h-6  lg:mx-3 text-center '>4</div>
                    <div className='font-thin lg:font-medium'>
                    When someone asks “Does anyone here speak French?” in any given scenario, you can be the
          hero they never knew they needed.
                    </div>
                </div>
               
     
               

            </div>
        </>
    )
}

export default ThirdPage
