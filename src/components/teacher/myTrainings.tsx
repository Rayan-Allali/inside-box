"use client";
import annoceIcon from "@/assets/images/shared/annoceIcon.svg";
import { useState } from "react";
import CardContainer from "../Admin/CourseContainer";
import AiImg from "@/assets/images/courses/chatgpt.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
export const TeacherGeneral = () => {
  const [isBlured, setIsBlured] = useState(false);

  const [cards, setCards] = useState<any[]>([
    {
      id: "2",
      title: "AI",
      desc: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
      img: AiImg,
    },
    {
      id: "0",
      title: "AI",
      desc: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
      img: AiImg,
    },
    {
      id: "1",
      title: "AI",
      desc: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
      img: AiImg,
    },
  ]);
  const route = useRouter();
  return (
    <div className={`p-[40px] ${isBlured ? "blur-[5px]" : ""}`}>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-[10px] ">
          <h1 className="text-3xl font-bold">Welcome to Your Main Page</h1>
          <p className="text-xl">
            You can control accounts of trainers , trainees , and trainings !{" "}
          </p>
        </div>
        <button className=" items-center text-xl font-bold text-[#38CFBA] border border-[#38CFBA] flex justify-around min-w-[250px] px-[20px] py-[10px] rounded-md">
          <Image src={annoceIcon.src} alt="annoceICon" width={24} height={24} />{" "}
          Add Announce
        </button>
      </div>
      <div className="flex items-center flex-wrap gap-8 pt-[40px]  ">
        {cards.map((card, index) => {
          return (
            <div
              className=""
              key={index}
              onClick={() => route.push(`/Teacher/Trainings/${card.title}`)}
            >
              <CardContainer
                title={card.title}
                desc={card.desc}
                img={card.img}
                setIsBlured={setIsBlured}
                handleDelete={undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
