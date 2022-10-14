import React from "react";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const Profile = () => {
  return (
    <>
      <div className="md:fixed flex flex-col w-[100%] md:w-[27%] bg-slate-200 md:h-[100vh] ">
        <div className="flex mt-20 md:mt-0 justify-center">
          <img
            src="/profile.jpg"
            className="md:w-[83%] md:rounded-tl-lg md:rounded-br-3xl shadow-md md:mt-20 object-bottom"
            alt="profile pic"
          />
        </div>
        <div className="flex justify-center space-x-10 p-3 text-gray-600 text-2xl">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/ratnesh-siddha-b0266a21b/"
          >
            <BsLinkedin className=" hover:scale-90 transition-all" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/SiddhaRatnesh"
          >
            <BsTwitter className=" hover:scale-90 transition-all" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/ratneshsiddh/"
          >
            <BsInstagram className=" hover:scale-90 transition-all" />
          </a>
        </div>
        <div className="flex justify-center">
          <button className="bg-cyan-600 w-full md:w-[85%] p-2 md:rounded-sm mb-3 hover:scale-95 transition-all text-white text-xl">
            Download cv
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
