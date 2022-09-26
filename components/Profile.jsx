import React from 'react'
import { BsLinkedin , BsTwitter , BsInstagram } from 'react-icons/bs';

const Profile = () => {
  return (
    <>
    <div className='md:fixed flex flex-col w-[100%] md:w-[27%] bg-slate-200 md:h-[100vh] '>
    <div className="flex justify-center">
    <img
      className="md:w-[85%] md:rounded-tl-lg md:rounded-br-3xl shadow-md md:mt-20 object-bottom"
      src="https://media-exp1.licdn.com/dms/image/C5603AQEVGRaBxGF-Ig/profile-displayphoto-shrink_800_800/0/1641456638840?e=2147483647&v=beta&t=FSoGkKyE1UyC0ILXU3DM6O7QNcIrTNqS-fl5yDh3vHY"
      alt="profile pic"
      />
  </div>
  <div className='flex justify-center space-x-10 p-3 text-gray-600 text-2xl'>
        <BsLinkedin className=' hover:scale-90 transition-all'/>
        <BsTwitter className=' hover:scale-90 transition-all'/>
        <BsInstagram className=' hover:scale-90 transition-all'/>
    </div>
    <div className='flex justify-center'>
    <button className='bg-cyan-600 w-full md:w-[85%] p-2 md:rounded-sm mb-3 hover:scale-95 transition-all text-white text-xl'>Download cv</button>
    </div>
    </div>
      </>
  )
}

export default Profile