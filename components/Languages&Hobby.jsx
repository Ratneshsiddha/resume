import React from "react";

const LanguagesAndHobby = () => {
  return (
    <div className="space-y-2 bg-gray-200 p-6 rounded-md shadow-sm w-full md:w-[260px]">
      <font className="text-2xl text-cyan-600">Languages</font>
      <ul className="font-normal text-lg list-disc p-4 ">
        <li>Hindi</li>
        <li>English</li>
      </ul>
      <div className="space-y-2 w-full md:w-[210px]">
        <font className="text-2xl text-cyan-600">Hobbies</font>
        <ul className="font-normal text-lg list-disc p-4">
          <li>Chess</li>
          <li>Photography</li>
          <li>Cricket</li>
          <li>Painting</li>
        </ul>
      </div>
    </div>
  );
};

export default LanguagesAndHobby;
