import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Card(props) {
  return (
    <div className="p-5 sm:p-10">
      <div className="bg-white rounded-lg">
        <div className="bg-[#13BFAB] rounded-t-lg  p-6">
          <p className="text-center font-medium">{props.subtitle}</p>
          <h1 className="text-center font-bold text-4xl">{props.title}</h1>
        </div>
        <div className="p-5 md:p-2">
          <ul>
            <li className=" flex align-middle py-2 sm:p-2">
              <AiFillCheckCircle className="text-[#13BFAB] " />
              {props.p1}
            </li>
            <li className=" flex align-middle sm:p-2">
              <AiFillCheckCircle className="text-[#13BFAB]" />
              {props.p2}
            </li>
            <li className=" flex align-middle sm:p-2">
              <AiFillCheckCircle className="text-[#13BFAB]" />
              {props.p3}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
