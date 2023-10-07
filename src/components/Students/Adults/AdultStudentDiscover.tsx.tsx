"use client"
import AdminLayout from '@/app/AdminLayout'
import CourseCard from '@/components/Admin/CourseContainer'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState , useRef } from 'react';
import { z } from 'zod'
import { toFormikValidate } from 'zod-formik-adapter';

import chatgbt from "@/assets/images/courses/chatgpt.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AdultStudentDiscover = () => {

    const [ viewPassword, setViewPassword ] = useState(false);
    const swiperRef = useRef(null);
    

    return (
     <AdminLayout>
     <div className='h-full pt-8 px-20 flex flex-col space-y-10'>
        <div className='text-primary-black font-gilroy'>
            <h1 className='text-[44px] leading-normal'> Discorver The Trainings  We have ! </h1>
        </div>

        <div className='flex flex-row justify-between '>

        <input
         type="text"
         placeholder='Search for a training '
         className='w-[350px] px-3 rounded-[8px]  border-2 text-black border-black opacity-[30%]' />
        <button className='py-3 px-9 rounded-[8px] border-[#07A2F3] text-[[#07A2F3]] border-2'> Filter </button>
        </div>

         <div className="flex flex-row justify-center items-center w-[100%]">
              

        <div className="w-[100%]">
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
  </div>

        <div>
      
        </div>
    </div>

     );
    </AdminLayout>

    )
}

export default AdultStudentDiscover