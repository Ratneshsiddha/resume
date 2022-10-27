import React from "react";
import { BsCodeSlash } from "react-icons/bs";

const Courses = () => {
  return (
    <div>
      <div className="flex  items-center space-x-4">
        <font className="text-2xl text-cyan-600">Courses</font>
        <i className="text-3xl">
          <BsCodeSlash />
        </i>
      </div>
      <div className="bg-gray-200 p-2 rounded-md shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="px-4 md:mb-1">
            <font className="text-lg">Full Stack Web Development</font>
            <p className="font-normal">
              Inocrypt Infosoft Software Company <br />
              Jabalpur (M.P) <br />
              Nov 2021 - Present
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="px-4">
            <font className="text-lg">Java Foundation</font>
            <p className="font-normal">
              Oracle Acadmy <br />
              March 2022 - April 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
