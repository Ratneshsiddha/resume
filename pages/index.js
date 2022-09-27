import Head from "next/head";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { DiJava } from "react-icons/di";
import { FcGraduationCap } from "react-icons/fc";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrLocation, GrPhone } from "react-icons/gr";
import { AiOutlineMail, AiFillStar } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratnesh Siddha</title>
        <meta name="description" content="Ratnesh's resume website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3572/3572810.png" /> 
      </Head>
      <div className="space-y-6 md:space-y-0">
        {/* slide 1 */}
        <div className="flex flex-col font-medium justify-center  px-5 md:px-24 md:h-[100vh] ">
          <div className="space-y-1 ">
            <h1 className="text-gray-600 text-xl">Hello!</h1>
            <h1 className="text-2xl text-cyan-600">I Am Ratnesh.</h1>
            <hr className="border-cyan-600 border-2 w-14" />
            <p className="text-gray-600 leading-relaxed break-normal ">
              Seekin a begainer role to enhance and explore my technical
              knowledge gained in last few years. <br />
              I hold a diploma in information technology from Govt. Kalaniketan
              polytechnic college . <br />
              Recently i have completed my front-end development training at
              inocrypt infosoft software company.
            </p>
            
          </div>

          <div className="mt-10 space-y-1">
            <h1 className="text-2xl text-cyan-600">What I Am Doing</h1>
            <hr className="border-gray-600 border-2 w-14" />
            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="h-52 w-80 rounded-md shadow-sm mt-6 p-4 flex flex-col justify-evenly items-center text-center bg-slate-200">
                <h1>Web Design</h1>
                <div className="text-4xl">
                  <MdDesignServices />
                </div>
                <p className="text-gray-600 font-normal">
                  The most mordern and high quality design made at a
                  professional level.
                </p>
              </div>
              <div className="h-52 w-80 rounded-md shadow-sm mt-6 p-4 flex flex-col justify-evenly items-center text-center bg-slate-200">
                <h1>Web Development</h1>
                <div className="text-4xl">
                  <BsCodeSlash />
                </div>
                <p className="text-gray-600 font-normal">
                  High Quality development of sites at the professional level.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* slide 2 */}
        <div
          id="education"
          className="flex flex-col font-medium justify-center px-5 md:px-24 md:h-[100vh] "
        >
          <div className="space-y-2">
            <div className="flex items-center space-x-5">
              <font className="text-2xl text-cyan-600">Education</font>

              <i className="text-4xl">
                <FcGraduationCap />
              </i>
            </div>
            <div className="bg-gray-200 p-2 rounded-md shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="px-4 md:mb-3">
                  <font className="text-xl ">Computer Science Engineering</font>
                  <p className="font-normal">
                    B-tech ,Global Nature Care Sangathan Group Of
                    Institutions,Faculty OIf Engineering And Management,Jabalpur{" "}
                    <br />
                    Oct 2021 - Expected Graduation: Aug 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="px-4">
                  <font className="text-xl">
                    Diploma In Information Technology
                  </font>
                  <p className="font-normal">
                    Kalaniketan Polytechnic College , Jabalpur <br />
                    July 2017 - April 2021
                  </p>
                </div>
              </div>
            </div>
            <div className="flex  items-center space-x-4">
              <font className="text-2xl text-cyan-600">Courses</font>
              <i className="text-3xl">
                <BsCodeSlash />
              </i>
            </div>
            <div className="bg-gray-200 p-2 rounded-md shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="px-4 md:mb-3">
                  <font className="text-xl">Full Stack Web Development</font>
                  <p className="font-normal">
                    Inocrypt Infosoft Software Company <br />
                    Jabalpur (M.P) <br />
                    Nov 2021 - Present
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="px-4">
                  <font className="text-xl">Java Foundation</font>
                  <p className="font-normal">
                    Oracle Acadmy <br />
                    March 2022 - April 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slide 3 */}
        <div
          id="experience"
          className="flex flex-col font-medium justify-center px-5 md:px-24 md:h-[100vh]"
        >
          <div>
            <div className="space-y-2">
              <div className="flex space-x-4 items-center">
                <font className="text-2xl text-cyan-600">Internship</font>
                <div className="text-3xl">
                  <BsFillPeopleFill />
                </div>
              </div>
              <div>
                <font className="text-xl">
                  {" "}
                  Inocrypt Infosoft Software Company
                </font>
                <p className="font-normal">
                  Jabalpur (M.P) <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis corporis quasi sapiente illo, adipisci magnam <br />
                  Nov 2021 - Present
                </p>
              </div>
              <div>
                <font className="text-xl">Tick Tech It Solution</font>
                <p className="font-normal">
                  Pune (M.P)
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis corporis quasi sapiente illo, adipisci magnam <br />
                  june 2022 - Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* slide 4 */}
        <div
          id="about"
          className="flex flex-col font-medium px-5 space-y-2 md:px-24 md:h-[100vh]"
        >
          <div className="flex flex-col md:mt-32 justify-around md:flex-row md:space-x-4">
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
            <div className="space-y-2 bg-gray-200 p-6 rounded-md shadow-sm w-full md:w-[260px]">
              <font className="text-2xl text-cyan-600">Projects</font>
              <ul className="font-normal text-lg list-disc p-4">
                <li>Richly Ecommerce</li>
                <li>Notes Library</li>
                <li>Khabri</li>
                <li>Mini Games</li>
              </ul>
            </div>
          </div>
        </div>
        {/* slide 5 */}
        <div
          id="contact"
          className="flex flex-col text-gray-600 space-y-4 font-medium justify-center px-5 md:px-24 md:h-[100vh]"
        >
          <font className="text-2xl text-cyan-600">Get In Touch With Me</font>
          <div className="flex flex-col md:flex-row md:justify-around ">
            <div className="space-y-4 pb-4">
              <font className="text-xl">Contact Address</font>
              <div className="flex items-center space-x-4">
                <div>
                  <GrLocation />
                </div>
                <p>
                  House No.932 Street No.2 <br /> Samdariya Greencity Jabalpur
                  (M.P)
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <GrPhone />
                </div>
                <p>
                  Phone :
                  <a className="text-blue-700" href="tel:+919074647461">
                    +91 9074647461
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div>
                  <AiOutlineMail />
                </div>
                <p>
                  Email :
                  <a
                    className="text-blue-700"
                    href="mailto:Siddharatnesh@gmail.com"
                  >
                    Siddharatnesh@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <div class="relative mt-6 text-right md:w-96">
                  <div class="overflow-hidden md:w-96">
                    <iframe
                      class="gmap_iframe"
                      width="100%"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=430&amp;height=298&amp;hl=en&amp;q=samdariya greencity&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <font className="text-xl">Contact Form</font>
              <div className=" flex flex-col space-y-3">
                <input
                  className="bg-gray-200  text-black rounded-sm px-4 h-9 outline-cyan-600 outline-offset-4  border-2"
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  id=""
                />
                <input
                  className="bg-gray-200  text-black rounded-sm px-4 h-9 outline-cyan-600 outline-offset-4  border-2"
                  placeholder="Email"
                  type="text"
                  name="email"
                  id=""
                />
                <textarea
                  className="bg-gray-200 text-black rounded-sm px-4 h-32 md:h-44 outline-cyan-600 outline-offset-4  border-2"
                  placeholder="Message"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <button className="bg-cyan-600 h-9 rounded-sm hover:scale-95 transition-all text-white">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
