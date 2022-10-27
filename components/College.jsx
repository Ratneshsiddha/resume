import React from 'react'
import { FcGraduationCap } from "react-icons/fc";

const College = () => {
  return (
    <div>
              <div className="flex items-center space-x-5">
                <font className="text-2xl text-cyan-600">Education</font>

                <i className="text-4xl">
                  <FcGraduationCap />
                </i>
              </div>
              <div className="bg-gray-200 p-2 rounded-md shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="px-4 md:mb-1">
                    <font className="text-lg ">
                      Computer Science Engineering
                    </font>
                    <p className="font-normal">
                      B-tech ,Global Nature Care Sangathan Group Of
                      Institutions,Faculty OIf Engineering And
                      Management,Jabalpur <br />
                      Oct 2021 - Expected Graduation: Aug 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="px-4">
                    <font className="text-lg">
                      Diploma In Information Technology
                    </font>
                    <p className="font-normal">
                      Kalaniketan Polytechnic College , Jabalpur <br />
                      July 2017 - April 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default College