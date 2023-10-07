"use client";
import Image from "next/image";
import { useState } from "react";

// Assets
import Kid from "@/assets/images/Student/Kid.png";
import robot from "@/assets/images/Student/Robot.png";
import code from "@/assets/images/Student/Code.png";
import iot from "@/assets/images/Student/IOT.png";
import arrow from "@/assets/images/Student/ArrowEnroll.svg";

const KidStudentGeneral = () => {
  const [trends, setTrends] = useState([
    { title: "Are you ready to start you Ai journey ?", pic: robot, id: 1 },
    { title: "Are you ready to start you Ai journey ?", pic: code, id: 2 },
    { title: "Are you ready to start you Ai journey ?", pic: iot, id: 3 },
  ]);

  return (
    <div className="h-full pt-8 px-20 flex flex-col space-y-10">
      <div className="flex flex-col gap-[80px]">
        <div className=" w-[1450px] flex justify-center items-start mt-[80px]">
          <div className="flex flex-col gap-[88px]">
            <div className="flex flex-col gap-[32px]">
              <h1 className="text-[56px] font-bold w-[934px] font-Bold">
                Welcome To <span className="text-[#07A2F3]">InsideBox</span> the
                best place to boost your Skills !
              </h1>
              <p className="w-[803px] font-light text-[32px] text-[#808080]">
                Le lorem ipsum est, en imprimerie, une suite de mots sans
                signification utilisée à titre provisoire pour calibrer une mise
                en page
              </p>
            </div>
            <button className="bg-[#FBE364] w-[348px] font-extrabold text-[#505050] text-[28px] h-[100px] rounded-[8px]">
              Discover More
            </button>
          </div>
          <Image alt="AdultGeneral" src={Kid} />
        </div>
        <div className="flex flex-row space-x-8 justify-between ">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="mb-[80px] rounded-[10px] flex justify-center w-[480px] h-[545px] cursor-pointer"
            >
              <Image
                src={trend.pic}
                className="object-cover rounded-[10px] "
                alt="Field"
              />
              <div className="absolute flex justify-center font-semibold flex-col items-start gap-[56px]">
                <p className="text-3xl text-white w-[417px] pt-[330px] font-bold">
                  {" "}
                  {trend.title}{" "}
                </p>
                <div className="flex gap-[16px]">
                  <p className="text-white">Enroll Now</p>
                  <Image alt="arrow" src={arrow} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KidStudentGeneral;
