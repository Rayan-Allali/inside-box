"use client";
import notificationIcon from "@/assets/images/shared/notificationIcon.svg";
import Image from "next/image";
import { useState } from "react";
import AiImg from "@/assets/images/shared/traningCover.png";
import { BsCheckCircleFill } from "react-icons/bs";
import Dossier from "@/assets/images/shared/dossier.svg";
import addDossier from "@/assets/images/shared/addDossier.svg";
import { useRouter } from "next/navigation";

export const TeacherTraining = () => {
  const router = useRouter();
  const [training, setTraining] = useState({
    id: "0",
    title: "AI",
    desc: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
    img: AiImg,
    exp: 120,
  });

  const [courses, setCourses] = useState([
    {
      title: "math basics",
      status: "completed",
    },
    {
      title: "machine learning",
      status: "next",
    },
    {
      title: "deep learning",
      status: "not completed",
    },
  ]);

  const handleDossierClick = (ressourceId: string) => {
    router.push(`/${ressourceId}`);
  };

  return (
    <div className="p-[40px]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-[10px] ">
          <h1 className="text-3xl font-bold">
            Welcome to Your Trainings Programs
          </h1>
          <p className="text-xl">
            You can control accounts of trainers , trainees , and trainings !{" "}
          </p>
        </div>
        <Image
          src={notificationIcon.src}
          alt="notification"
          width={28}
          height={28}
        />
      </div>
      <div className="py-20 h-full flex justify-between">
        <div className="flex flex-col justify-between basis-[35%]">
          <div>
            <div className="flex justify-between w-full mb-10">
              <h3 className="text-3xl font-bold text-[#676C72] ">
                {training.title}
              </h3>
              <h2 className="text-3xl font-bold text-[#676C72]">
                {training.exp} Exp
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {courses.map((course, index) => {
                return (
                  <div key={index} className="flex gap-2 mt-5 items-end">
                    {course.status === "completed" ? (
                      <BsCheckCircleFill color={"#38CFBA"} size={22} />
                    ) : (
                      <p></p>
                    )}
                    <h2
                      className="text-2xl "
                      style={{
                        color: course.status === "next" ? "#414141" : "#676C72",
                      }}
                    >
                      {course.title}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button className="mt-8 text-[#07A2F3] items-center text-xl font-bold  border-[2px] border-[#07A2F3] flex justify-around min-w-[200px] px-[20px] py-[14px] rounded-md">
              View Assignments
            </button>
          </div>
        </div>
        <div className="basis-[60%] rounded-md">
          <Image
            className="w-full h-full"
            src={training.img}
            alt="training img"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-xl">Ressources</h2>
        <div className="grid grid-cols-6 gap-10">
          {courses.map((course, index) => {
            return (
              <div className="" key={index}  >
                <div onClick={() =>  router.push(`/Teacher/Trainings/${course.title}/resources`)}>
                  <Image
                    src={Dossier}
                    alt="dossier"
                    width={140} 
                    height={135}
                  />
                </div>
                <h1 className="text-[#07A2F3] text-xl font-bold mt-5">
                  Chapitre {index}
                </h1>
              </div>
            );
          })}
          <div className="w-full">
            <div>
              <Image
                src={addDossier.src}
                alt="addd Dossier"
                width={140}
                height={135}
              />
            </div>
            <h1 className="text-[#07A2F3] text-xl font-bold mt-5">
              Add Directory
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
