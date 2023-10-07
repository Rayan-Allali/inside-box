"use client"
import AdminLayout from '@/app/AdminLayout'
import CourseCard from '@/components/Admin/CourseContainer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState , useRef } from 'react';
import { z } from 'zod'
import { toFormikValidate } from 'zod-formik-adapter';
import Image from "next/image";
import chatgbt from "@/assets/images/courses/chatgpt.svg";
import robot from "@/assets/images/Student/robot.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from '@/components/Shared/Header'
import "swiper/css";
import pdf from "@/assets/images/Student/pdf_icon.svg";
import meet from "@/assets/images/Student/meet_icon.svg";

const AdultStudentGeneral = () => {

const [ressources , setRessources] = useState(
    [ { title: 'Lesson one plan' , pic: pdf , id:1 } , 
      { title: 'Lesson two plan' , pic: pdf ,  id:2 } , 
      { title: 'Additional reading' , pic: pdf ,  id:3 } ,
      { title: 'Exercice unit 1' , pic: pdf ,  id:4 } ,
      { title: 'Exercice unit 1' , pic: meet ,  id:5 } ,
    ]); 


    return (
     <AdminLayout>
     <div className='h-screen pt-8 px-20 flex flex-col space-y-10'>
        <Header title='View ressources to your chapters' subtitle='You can view ressources of all chapters   ' />

        <div className='flex flex-row justify-start space-x-7 '>
            <button className='py-4 px-9 rounded-[8px] text-[26px] bg-[#38CFBA] text-white border-2'> Ch1 : Course Basics</button>
            <button className='py-4 px-9 rounded-[8px] text-[26px] border-[#38CFBA] text-[#38CFBA] border-2'> Ch2 : Intro to web </button>
            <button className='py-4 px-9 rounded-[8px] text-[26px] border-[#38CFBA] text-[#38CFBA] border-2'> Ch3 : Intro to html </button>
        </div>

        <div className='bg-[#FBFBFB] h-[60%] flex flex-col justify-between space-y-10 px-10 py-5 '>
           <div className='flex flex-col space-y-10'>
                <h1 className='font-bold text-2xl'> {"Ch1"}  ressources </h1>
                    <div className='flex flex-wrap items-end space-x-14 '>

                        
                { ressources.map((rcs) =>
                (  <div key={rcs.id} className="flex flex-col space-y-2">   
                    
                    <Image alt='arrow' src={rcs.pic} />
                        <p> {rcs.title}</p>               
                    </div>  
                    ))}


                    </div>
           </div>
           
            <div className='flex flex-row-reverse items-center gap-5 '>
               
                <button className='py-3 px-7 rounded-[8px] text-[26px] bg-[#07A2F3] text-white border-2'>Chat with your classmates </button>
                <button className='py-3 px-7 rounded-[8px] text-[26px] bg-[#896DDB] text-white border-2'>View Assignements</button>
            </div>

        </div>



     </div>

     );
    </AdminLayout>

    )
}

export default AdultStudentGeneral