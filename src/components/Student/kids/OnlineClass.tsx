"use client";

import React, { useState } from "react";
import XP from "@/assets/images/shared/XP.svg";
import Teacher from "@/assets/images/shared/Teacher.png";
import Razane from "@/assets/images/shared/Student/razane.png";
import Ayoub from "@/assets/images/shared/Student/ayoub.png";
import Karim from "@/assets/images/shared/Student/karim.png";
import Rayan from "@/assets/images/shared/Student/rayan.png";
import Ryad from "@/assets/images/shared/Student/ryad.png";
import cheer from "@/assets/images/shared/Cheer.png";
import Image from "next/image";
import TalkingBox from "./TalkingBox";

const OnlineClass = () => {
  const images = [];
  for (let index = 0; index < 24; index++) {
    images.push(<Image key={index} src={cheer} alt="cheer" />);
  }
  return (
    <div className="flex gap-[20px]">
      <TalkingBox></TalkingBox>
      <div className="p-[40px] flex flex-col gap-[80px]">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-[10px] ">
            <h1 className="text-4xl font-bold max-w-[780px]">
              Welcome to the online class
            </h1>
          </div>
          <button className=" items-center text-xl font-bold text-white bg-[#896DDB] flex justify-around w-[125px] px-[20px] py-[16px] rounded-[8px]">
            <Image src={XP} alt="XP" width={24} height={24} /> 0 XP
          </button>
        </div>
        <div className="flex flex-col items-center gap-[48px]">
          <div>
            <Image src={Teacher} alt="teacher" />
          </div>
          <div>
            <div className="flex gap-[70px] translate-x-[-20px]">
              <Image src={Ayoub} alt="ayoub" />
              <Image src={Razane} alt="razane" />
              <Image src={Karim} alt="karim" />
              <Image src={Rayan} alt="Rayan" />
              <Image src={Ryad} alt="Ryad" />
            </div>
            <div className="grid grid-rows-3 grid-cols-8 w-[1400px]">
              {images}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineClass;
