"use client";

import React, { useState } from 'react'
import XP from '@/assets/images/shared/XP.svg'
import Hi from '@/assets/images/shared/ShakeHand.svg'
import box from '@/assets/images/shared/BoxBot.png'
import send from '@/assets/images/shared/send.svg'
import Image from 'next/image';

const BoxBot = () => {

  return (
    <div className='p-[40px] flex flex-col gap-[420px]'>
         <div className='flex justify-between items-center '  >
             <div className="flex flex-col gap-[10px] ">
                <h1 className="text-4xl font-bold max-w-[780px]">Hi, this is <span className='text-[#38CFBA]'>BoxBot</span> i’ll guide you in this course,
                first of all let’s discuss about “AI” </h1>             
             </div>
            <button className=' items-center text-xl font-bold text-white bg-[#896DDB] flex justify-around w-[125px] px-[20px] py-[16px] rounded-[8px]'>
                <Image src={XP} alt="XP"  width={24} height={24} /> 0 XP 
            </button>
         </div>
         <div className='flex flex-col items-center justify-center gap-[48px]'>
            <Image src={Hi} alt="handshake"/>
            <div className='flex items-start gap-8 translate-x-[250px]'>
                <div className='border-[2px] border-[#38CFBA] bg-[#EBFAF8] border-[8px]'>
                    <p className='w-[468px] px-8 py-4'>
                    Hi, i’m BoxBot, i’m so excited to talk about AI, First of all i’ve
                    few questions about Ai & i need your answer about it !
                    </p>
                </div>
                <Image src={box} alt="BoxBot" />
            </div>
            <div className='rounded-t-[64px] bg-[#F9F9F9] h-[124px] w-[861px] border-[1px] border-[#B2B2B2] flex items-center justify-between px-16'>
                <input type='text' placeholder="let's talk" className='bg-[#F9F9F9]'/>
                <Image src={send} alt="send"/>
            </div>
         </div>
 </div>
  )
}

export default BoxBot