import React from 'react'
import { GrLocation, GrPhone } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

const ContactInfo = () => {
  return (
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
                <div className="relative mt-6 text-right md:w-96">
                  <div className="overflow-hidden md:w-96">
                    <iframe
                      className="gmap_iframe"
                      width="100%"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=932, Manmohan Nagar, Transport Nagar, Jabalpur, Madhya Pradesh 482001&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
  )
}



export default ContactInfo