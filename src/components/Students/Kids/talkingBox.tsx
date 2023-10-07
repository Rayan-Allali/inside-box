"use client";
import logo from "@/assets/images/shared/logo.svg";
import Trainees from "@/assets/images/SideNavbar/trainees.svg";
import TraineesBleu from "@/assets/images/SideNavbar/traineesBleu.svg";
import Trainer from "@/assets/images/SideNavbar/trainers.svg";
import TrainerBleu from "@/assets/images/SideNavbar/trainersBleu.svg";
import Trainings from "@/assets/images/SideNavbar/trainings.svg";
import TrainingsBleu from "@/assets/images/SideNavbar/trainingsBleu.svg";
import frame from "@/assets/images/SideNavbar/frame.svg";
import frameBleu from "@/assets/images/SideNavbar/frameBleu.svg";
import Profillogo from "@/assets/images/shared/Profillogo.svg";
import signout from "@/assets/images/SideNavbar/signout.svg";
import Image from 'next/image';
import React, { useState } from 'react'
import phone from "@/assets/images/Student/ic_round-call.svg"
import mic from "@/assets/images/Student/ic_baseline-mic.svg"
const TalkingBox= () => {

  return (
<div className="w-1/6 flex flex-col items-center justify-between pt-28 h-[100vh] bg-white drop-shadow-sidebar">
      <div className="flex flex-col gap-32 items-center justrify-center w-full">
        <Image alt="logo" src={logo} />
        <div className="">
        <div className='flex flex-col items-center justify-center gap-[40px] w-[248px]'>

            
<div className="flex flex-col gap-[10px] bg-[#07A2F31A] p-4 rounded-md w-[248px]">
   <h1 className=" font-bold
   max-w-[214px]
   text-[20px] flex
   items-center text-[#07A2F3]">Front-End Development Training</h1>   
            <h1 className=" font-bold max-w-[214px] text-[12px] flex items-center text-[#07A2F3]">Trainer: <span className='font-[400]'> Allali Rayan</span></h1> 
   <h1 className="text-[12px] font-bold
   max-w-[214px] flex
   items-center text-[#07A2F3]">Trainer: <span className='font-[400]'> 2h</span></h1>  
</div>
<div className='w-full flex items-center justify-center w-full gap-[10px]'>
<Image src={phone.src} alt={"phone"}  width={"35"} height={"35"}/>
<Image src={mic.src} alt={"phone"} width={"35"} height={"35"}/>
</div>
</div>
        </div>
      </div>

  
    </div>


 
  )
}

export default TalkingBox;