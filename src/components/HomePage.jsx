import React from "react";
import vc from "./images/vc.svg";
import greenbox from "./images/greenbox.svg";
import student1 from "./images/student 1.svg";
import training1 from "./images/training1.svg";

function HomePage() {
  return (
    <>
      <div>
        <div className=" py-2 flex flex-col text-center ">
          <h1 className="tracking-wide  font-bold text-xl lg:text-4xl ">
            Learn French online and gain the
            <br />
              confidence to speak fluently.
          </h1>

          <p className=" text-center w-full px-10 lg:px-60 pt-4 text-xs lg:text-sm ">
            Learn about all the basics and wonders of the French Language by our
            renowned trainer and get professional guidance with native style
            speaking skills.
          </p>

          <div className=" py-4">
            <button className="  content-center text-center bg-green-500	 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Request Brochure
            </button>
          </div>
        </div>

        <div
          className="flex flex-col 
                
                lg:flex lg:flex-row lg:mx-10  "
        >
          <div className=" my-3 px-5 lg:w-1/2 ">
            <div
              className=" 
                        flex flex-row   bg-[#F4F4F4] 
                        lg:items-center lg:justify-center
                        "
            >
              <div className=" mx-3 my-2 items-center ">
                <img src={student1} alt="" width={50} />
              </div>
              <div className="my-3 px-5 flex flex-col">
                <h2 className=" text-lg font-bold">5000+</h2>
                <p>Happy Learners</p>
              </div>
            </div>

            <div className="my-3 flex flex-row   bg-[#F4F4F4] lg:items-center lg:justify-center">
              <div className=" mx-3 my-2 items-center">
                <img src={training1} alt="" width={50} />
              </div>
              <div className="my-3 px-5 flex flex-col">
                <h2 className=" text-lg font-bold"> 150+</h2>
                <p>Alpha Mentors</p>
              </div>
            </div>
            <div className=" my-3 flex flex-row   bg-[#F4F4F4] lg:items-center lg:justify-center">
              <div className=" mx-3 my-2 items-center">
                <img src={training1} alt="" width={50} />
              </div>
              <div className="my-3 px-5 flex flex-col">
                <h2 className=" text-lg font-bold"> 150+</h2>
                <p>Alpha Mentors</p>
              </div>
            </div>
          </div>

          <div className=" py-4 lg:px-0  ">
            <img
              className="hidden lg:visible lg:flex  absolute right-0  lg:-right-40  lg:h-64   w-1/2  lg:w-1/2"
              src={greenbox}
              alt=""
            />
            {/* <img
              src={vc}
              alt=""
              className="hidden lg:visible lg:flex  lg:-right-28   lg:h-64     lg:w-1/2"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
