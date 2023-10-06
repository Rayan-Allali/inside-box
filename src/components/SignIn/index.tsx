import React from 'react';
import Image from 'next/image';
import bgSignIn from '@/assests/images/SignIn/bleuHand.svg'
import logo from "@/assests/images/shared/logo.svg"
import eye from "@/assests/images/SignIn/eye.svg"
const SignIn = () => {
  return (
    <div  className='flex items-center w-full h-[100vh]   ' >
   <Image alt='signInpic' src={bgSignIn}  /> 
   <div className="bg-white flex flex-col items-center flex-grow h-full w-1/2 text-center py-32 ">
   <div className=" w-[500px] flex flex-col gap-32 ">
    <div className="flex flex-col gap-10 items-center ">
   <Image alt='logo' src={logo} /> 
    <p className="text-[#1B1B1B80] font-light text-2xl">Veuillez remplir ce qui suit pour accéder à votre compte</p>
    </div>
    <div className="flex flex-col gap-5 items-center w-full">
      <input type="text" className="w-full p-4 pl-5 border rounded-lg border-[#1B1B1B80] focus:border-[#1B1B1B] " placeholder='Email' />
      <div className="relative w-full h-max">
      <input type='password' className="w-full p-4 pl-5 border border-[#1B1B1B80] focus:border-[#1B1B1B] rounded-lg relative " placeholder='Password' />
      <Image alt='Eye' src={eye} className="absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer"/>
      </div>
      <button className="bg-primaryBleu text-white font-semibold w-full p-4 rounded-lg text-2xl ">Login</button>
    </div>
   </div>
   </div>
    </div>
  );
};

export default SignIn;