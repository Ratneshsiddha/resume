import Link from "next/link";
import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { HiMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
      {/* bg-slate-100 */}
      <div className="fixed top-0 w-full z-10">
        <div className="flex md:w-[100%] mt-2 p-2 justify-center font-medium ">
          <nav className="flex flex-col content-center md:flex-row  justify-between w-[97%] bg-cyan-600 text-white px-6 py-1 rounded-md shadow-md space-y-2 ">
            <div className="flex justify-between items-center md:text-start text-2xl  ">
              <Link href={"/"}>
                {/* <h1 className="hover:cursor-pointer">Ratnesh siddha</h1> */}
                <img className="h-10 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/3572/3572810.png" alt="" />
              </Link>

              <Menu placement="bottom-start">
                <MenuHandler className="md:hidden">
                  <div>
                    <HiMenuAlt4 />
                  </div>
                </MenuHandler>
                <MenuList className="font-medium text-center w-[80%] mt-2">
                  <MenuItem className="bg-white p-3 px-5 ">
                    <Link href={"#education"}>Education</Link>
                  </MenuItem>
                  <MenuItem className="bg-white p-3 px-5">
                    <Link href={"#experience"}> Experience</Link>
                  </MenuItem>
                  <MenuItem className="bg-white p-3 px-5 ">
                    <Link href={"#about"}>About</Link>
                  </MenuItem>
                  <MenuItem className="bg-white p-3 px-5">
                    <Link href={"#contact"}> Contact</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className="hidden md:block">
              <ul className="flex justify-center content-center text-lg space-x-4">
                <Link href={"#education"}>
                  <li className="hover:cursor-pointer hover:text-gray-200 hover:scale-95 transition-all underline-offset-2 hover:underline">
                    Education
                  </li>
                </Link>
                <Link href={"#experience"}>
                  <li className="hover:cursor-pointer hover:text-gray-200 hover:scale-95 transition-all underline-offset-2 hover:underline">
                    Experience
                  </li>
                </Link>
                <Link href={"#about"}>
                  <li className="hover:cursor-pointer  hover:text-gray-200 hover:scale-95 transition-all underline-offset-2 hover:underline">
                    About
                  </li>
                </Link>
                <Link href={"#contact"}>
                  <li className="hover:cursor-pointer hover:text-gray-200 hover:scale-95 transition-all underline-offset-2 hover:underline">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
