import React from "react";
import { AiFillStar } from "react-icons/ai";

const Skills = () => {
  return (
    <div className="space-y-2 bg-gray-200 p-6 rounded-md shadow-sm w-full md:w-[260px]">
      <font className="text-2xl text-cyan-600">Skills</font>
      <ul className="font-normal text-lg list-disc p-4">
        <li>HTML/CSS/JavaScript</li>
        <li className="flex text-cyan-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <div className="flex text-gray-600">
            <AiFillStar />
          </div>
        </li>
        <hr className="bg-cyan-600 h-1" />
        <li>React</li>
        <li className="flex text-cyan-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <div className="flex text-gray-600">
            <AiFillStar />
            <AiFillStar />
          </div>
        </li>
        <hr className="bg-cyan-600 h-1" />
        <li>MongoDB</li>
        <li className="flex text-cyan-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <div className="flex text-gray-600">
            <AiFillStar />
            <AiFillStar />
          </div>
        </li>
        <hr className="bg-cyan-600 h-1" />
        <li>Programming</li>
        <li className="flex text-cyan-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <div className="flex text-gray-600">
            <AiFillStar />
          </div>
        </li>
        <hr className="bg-cyan-600 h-1" />
        <li>Taillwind</li>
        <li className="flex text-cyan-600">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <div className="flex text-gray-600">
            <AiFillStar />
            <AiFillStar />
          </div>
        </li>
        <hr className="bg-cyan-600 h-1" />
        <li>Fast Learner</li>
        <li>Teamwork</li>
      </ul>
    </div>
  );
};

export default Skills;
