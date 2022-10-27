import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";

const Internship = () => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-4 items-center ">
        <font className="text-2xl text-cyan-600">Internship</font>
        <div className="text-3xl">
          <BsFillPeopleFill />
        </div>
      </div>
      <div>
        <font className="text-lg"> Inocrypt Infosoft Software Company</font>
        <p className="font-normal">
          Jabalpur (M.P) <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          corporis quasi sapiente illo, adipisci magnam <br />
          Nov 2021 - Present
        </p>
      </div>
      <div>
        <font className="text-lg">Tick Tech It Solution</font>
        <p className="font-normal">
          Pune (M.H)
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          corporis quasi sapiente illo, adipisci magnam <br />
          june 2022 - Oct 2022
        </p>
      </div>
    </div>
  );
};

export default Internship;
