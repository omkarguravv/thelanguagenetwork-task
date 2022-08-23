import React from "react";
import Card from "./Card";

function Levels() {
  return (
    <div className=" p-10  bg-[#2E3131] ">
      <h2 className="text-center text-white text-2xl">
        Gain Mastery on all levels of CEFR (The Common European Framework of
        Reference for Languages: Learning, teaching, assessment):{" "}
        <span className="font-bold">A1, A2, B1, B2, C1, C2</span> of the French
        Language
      </h2>
      <div className="grid sm:grid-cols-3 md:grid-cols-5">
        <Card
          title="A1"
          subtitle="ABSOLUTE BEGINNER"
          p1="Use familiar everyday expressions"
          p2="Introduce yourself and others"
          p3="Interact in a simple conversation"
        />
        <Card
          title="A2"
          subtitle="BEGINNER"
          p1="Use familiar everyday expressions"
          p2="Introduce yourself and others"
          p3="Interact in a simple conversation"
        />
        <Card
          title="B1"
          subtitle="INTERMEDIATE"
          p1="Use familiar everyday expressions"
          p2="Introduce yourself and others"
          p3="Interact in a simple conversation"
        />
        <Card
          title="B2"
          subtitle="INTERMEDIATE"
          p1="Use familiar everyday expressions"
          p2="Introduce yourself and others"
          p3="Interact in a simple conversation"
        />
        <Card
          title="C1"
          subtitle="ADVANCE"
          p1="Use familiar everyday expressions"
          p2="Introduce yourself and others"
          p3="Interact in a simple conversation"
        />
      </div>
      <div className="align-middle text-center m-10">
        <button className="  content-center text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border border-blue-700 rounded ">Start Learning French Online</button>
      </div>
    </div>
  );
}

export default Levels;
