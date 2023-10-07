"use client";
import CourseCard from "@/components/Admin/CourseContainer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useRef } from "react";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";
import Image from "next/image";
import chatgbt from "@/assets/images/courses/chatgpt.svg";
import robot from "@/assets/images/Student/robot.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "@/components/Shared/Header";
import "swiper/css";
import attachement from "@/assets/images/Student/attachement.svg";
import emoji from "@/assets/images/Student/emoji.svg";
import send from "@/assets/images/Student/send.svg";

const StudentMessagerie = () => {
  return (
    <div className="h-screen pt-8 px-20 flex flex-col space-y-10 justify-between">
      <Header
        title="View ressources to your chapters"
        subtitle="You can view ressources of all chapters"
      />

      <div className="h-[85%] w-[100%] border-t-2 flex flex-row justify-start space-x-7 ">
        <div className="w-[38%] h-full flex flex-col items-start justify-start space-y-10 border-r-2 py-6 pl-3 ">
          <input
            type="text"
            placeholder="Search for messages"
            className="w-[80%] h-16 px-5 border-2 rounded-lg shadow-sm"
          />

          <div className="flex flex-row items-center space-x-7 ">
            <Image
              className="rounded-full shadow-lg w-16 h-16"
              src={robot}
              alt=""
            />
            <p className="text-lg"> Classroom : Web dev </p>
            <p className="text-sm text-black opacity-60 pl-24"> 23h </p>
          </div>
          <div className="flex flex-row items-center space-x-7 ">
            <Image
              className="rounded-full shadow-lg w-16 h-16"
              src={robot}
              alt=""
            />
            <p className="text-lg"> Classroom : Web dev </p>
            <p className="text-sm text-black opacity-60 pl-24"> 23h </p>
          </div>
          <div className="flex flex-row items-center space-x-7 ">
            <Image
              className="rounded-full shadow-lg w-16 h-16"
              src={robot}
              alt=""
            />
            <p className="text-lg"> Classroom : Web dev </p>
            <p className="text-sm text-black opacity-60 pl-24"> 23h </p>
          </div>
        </div>

        <div className="h-full w-[62%] pt-10 flex flex-col space-y-2 items-center justify-between">
          <div className=" w-[80%] flex justify-start">
            <div className="border-2 w-[60%] rounded-2xl">
              <p className="p-10">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation
              </p>
            </div>
          </div>

          <div className="bg-[#FBFBFB] flex flex-row justify-between h-36 w-[80%] px-10 rounded-3xl">
            <div className="flex flex-row justify-center items-center space-x-5 ">
              <Image src={attachement} alt="" className="cursor-pointer"/>
              <input
                type="text"
                placeholder="Send a message..."
                className="text-2xl bg-[#FBFBFB]"
              />
            </div>

            <div className="flex flex-row justify-center items-center space-x-5">
              <Image src={emoji} alt="" className="cursor-pointer"/>
              <Image src={send} alt="" className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMessagerie;
