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


const AdultStudentGeneral = () => {

    return (
     <AdminLayout>
     <div className='h-full pt-8 px-20 flex flex-col space-y-10'>
        <Header title='View ressources to your chapters' subtitle='You can view ressources of all chapters   ' />

        <div className='flex flex-row justify-start space-x-7 '>
            <button className='py-3 px-9 rounded-[8px] border-[#07A2F3] text-[#07A2F3] border-2'> Ch1 : Course Basics</button>
            <button className='py-3 px-9 rounded-[8px] border-[#07A2F3] text-[#07A2F3] border-2'> Ch1 : Intro to web </button>
            <button className='py-3 px-9 rounded-[8px] border-[#07A2F3] text-[#07A2F3] border-2'> Ch1 : Intro to html </button>
        </div>

        <div className='bg-[#FBFBFB]'>

        </div>

     </div>

     );
    </AdminLayout>

    )
}

export default AdultStudentGeneral