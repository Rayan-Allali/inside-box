"use client"
import AdminLayout from '@/app/AdminLayout'
import { useState , useRef } from 'react';
import Image from "next/image";
import  Settings from "@/assets/images/Student/setting.svg";

const TestQuiz = () => {




    return (
     <AdminLayout>
     <div className='h-screen pt-8 px-20 flex flex-col justify-center items-center space-y-14 font-gilroy'>
     
       <h1 className='text-[80px] opacity-75 text-center font-bold'> We’re Treating your answers <br/> Please wait</h1>
       <Image className="animate-spin-slow" alt="edit" src={Settings} />
           
        </div>
        <div className="h-screen w-full flex flex-col justify-center items-center gap-[10vh]">
            <h1 className="max-w-[82vw] font-bold text-BlueDark text-[4.5rem] text-center">Entrain de traiter votre demande Veuillez patienter....</h1>
            <img className="animate-spin-slow" src="/setting.png"></img>
          </div>

     );
    </AdminLayout>

)
}
export default TestQuiz