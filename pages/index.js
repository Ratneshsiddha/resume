import Head from "next/head";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Skills from "../components/Skills";
import LanguagesAndHobby from "../components/Languages&Hobby";
import Projects from "../components/Projects";
import Internship from "../components/Internship";
import College from "../components/College";
import Courses from "../components/Courses";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratnesh Siddha</title>
        <meta name="description" content="Ratnesh's resume website" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/3572/3572810.png"
        />
      </Head>
      <div className="space-y-6 md:space-y-0">
        {/* slide 1 */}
        <div className="flex flex-col font-medium justify-center  px-5 md:px-24 md:h-[100vh] ">
          <div className="space-y-1 ">
            <h1 className="text-gray-600 text-xl">Hello!</h1>
            <h1 className="text-2xl text-cyan-600">I Am Ratnesh.</h1>
            <hr className="border-cyan-600 border-2 w-14" />
            <p className="text-gray-600 leading-relaxed break-normal ">
              Looking for front-end developer positions to further develop and
              apply the technical skills I have gained in the last few years ,
              Exceptional skills in web applications, HTML5, tailwind,
              JavaScript, and react JS , Passionate about software architecture
              and cloud computing. Regular attendee of web developer meetups and
              hackathons. I hold a diploma in information technology from Govt.
              Kalaniketan polytechnic college , Currently studying computer
              science at GLOBAL NATURE CARE GROUP SANGATHAN INSTITUTION,
              Jabalpur. <br />
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
                  High quality development of sites at the professional level.
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
          <div className="space-y-4">
            <College />
            <Courses />
          </div>
        </div>
        {/* slide 3 */}
        <div
          id="experience"
          className="flex flex-col font-medium justify-center px-5 md:px-24 md:h-[100vh]"
        >
          <div>
            <Internship />
          </div>
        </div>
        {/* slide 4 */}
        <div
          id="about"
          className="flex flex-col font-medium px-5 space-y-2 md:px-24 md:h-[100vh]"
        >
          <div className="flex flex-col md:mt-32 justify-around md:flex-row md:space-x-4">
            <Skills />
            <LanguagesAndHobby />
            <Projects />
          </div>
        </div>
        {/* slide 5 */}
        <div
          id="contact"
          className="flex flex-col text-gray-600 space-y-4 font-medium justify-center px-5 md:px-24 md:h-[100vh]"
        >
          <font className="text-2xl text-cyan-600">Get In Touch With Me</font>
          <div className="flex flex-col md:flex-row md:justify-around ">
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
