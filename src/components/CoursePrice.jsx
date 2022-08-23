import React from 'react'
import PriceCard from './PriceCard'

function CoursePrice() {
    return (
        <>
            <div className=' bg-[#2E3131] text-white'>
                <h1 className=' text-center text-3xl  py-10 '> Our French Course Price</h1>
                <div className=' my-10 flex text-center items-center justify-center'>


                    <div className=' bg-white rounded  flex flex-row  text-center items-center justify-center w-max  '>
                        <div className='  m-2 py-2 rounded-full text-black bg-slate-200  '>
                            <h4 className=' mx-3 font-bold text-xl '>Personal Learning</h4>
                            <p>(1 teacher and 1 student)</p>
                        </div>
                        <div className='mx-1 py-2 rounded-full bg-slate-200 text-green-500'>
                            <h4 className=' mx-3 font-bold text-xl '>Personal Learning</h4>
                            <p>(1 teacher and 1 student)</p>
                        </div>

                    </div>
                </div>

                <div className='mx-6 bg-slate-100'>
                    <PriceCard />

                </div>

            </div>
        </>
    )
}

export default CoursePrice
