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
import "swiper/css";


const AdultStudentGeneral = () => {

    const swiperRef = useRef(null);

    const [trends , setTrends] = useState(
        [ { title: 'Are you ready to start you Ai journey ?' , pic: robot , id:1 } , 
          { title: 'Are you ready to start you Ai journey ?' , pic: robot ,  id:2 } , 
          { title: 'Are you ready to start you Ai journey ?' , pic: robot ,  id:3 } ,
        ]); 

    return (
     <AdminLayout>
     <div className='h-full pt-8 px-20 flex flex-col space-y-10'>
        <div className='text-primary-black font-gilroy'>
            <h1 className='text-[44px] font-extrabold leading-normal'> Discorver The Trainings  We have ! </h1>
        </div>

        <div className='flex flex-row justify-between '>

        <input
         type="text"
         placeholder='Search for a training '
         className='w-[350px] px-3 rounded-[8px]  border-2 text-black border-black opacity-[30%]' />
        <button className='py-3 px-9 rounded-[8px] border-[#07A2F3] text-[#07A2F3] border-2'> Filter </button>
        </div>

         <div className="flex flex-row justify-center items-center w-[100%]">
              

        
            <Swiper
                                ref={swiperRef}
                                spaceBetween={1}
                                className='w-[100%]'
                                breakpoints={{
                                    640: {
                                    slidesPerView: 1,
                                    },
                                
                                    1024: {
                                    slidesPerView: 4,
                                    },
                                }}
                                >
                    <div className='grid grid-row-4 gap-12 '>
                    <SwiperSlide>
                    <CourseCard
                    className="scale-50"
         img={chatgbt}
         title={"Artificial Intelligence"}
         desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page" >
                   </CourseCard>
                  </SwiperSlide>
                
             
                  <SwiperSlide>
                  <CourseCard
                    className="scale-50"
         img={chatgbt}
         title={"Artificial Intelligence"}
         desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page" >
                   </CourseCard>
                   </SwiperSlide>

                   <SwiperSlide>
                  <CourseCard
                    className="scale-50"
         img={chatgbt}
         title={"Artificial Intelligence"}
         desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page" >
                   </CourseCard>
                   </SwiperSlide>
                   
                   <SwiperSlide>
                  <CourseCard
                    className="scale-50"
         img={chatgbt}
         title={"Artificial Intelligence"}
         desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page" >
                   </CourseCard>
                   </SwiperSlide>

                   <SwiperSlide>
                  <CourseCard
         img={chatgbt}
         title={"Artificial Intelligence"}
         desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page" >
                   </CourseCard>
                   </SwiperSlide>

                
                  </div>          
              
              </Swiper>
    </div>

    <div className='flex flex-row space-x-8 justify-between '>
            
    { trends.map((trend) =>
          (  <div key={trend.id} className="mb-[80px] rounded-[10px] flex justify-center w-[480px] h-[545px] cursor-pointer">   
                <Image src={trend.pic} className='object-cover rounded-[10px] ' alt='Field'/>
                <div className="absolute flex justify-center font-semibold flex-col items-start gap-[56px]">
                    <p className="text-3xl text-white w-[417px] pt-[330px] font-bold"> {trend.title} </p> 
                    <div className='flex gap-[16px]'>
                        <p className='text-white'>Enroll Now</p>
                        <Image alt='arrow' />
                    </div> 
                </div>                    
            </div>  
            ))}

        </div>
    </div>

     );
    </AdminLayout>

    )
}

export default AdultStudentGeneral