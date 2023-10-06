'use client'
import { ReactElement, useState } from "react";
import Popup from 'reactjs-popup';

// Components
import Header from "@/components/Shared/Header";
import CardContainer from "../CourseContainer";

// Images
import chatgbt from "@/assets/images/courses/chatgpt.svg";

export const metadata = {
  title: 'Trainings',
  description: 'Generated by Next.js',
}

const Trainings = () => {
    // blur state for modals
  const [isBlured, setIsBlured] = useState(false);

  return (
      <div className={`h-full p-12 py-20 relative ${isBlured ? 'blur-[5px]' : ''}`}>
        <Header
          title="Welcome to the Trainings Page"
          subtitle="You can control accounts of trainings !"
        />
        <div className="pt-10 flex gap-8 flex-wrap">
          <div className="border border-[#896DDB] flex flex-col justify-between rounded-[19px] h-72 w-96 text-[#000000] font-bold p-12  ">
              <div className="flex flex-col gap-2">
              <h1 className="text-xl">New Training</h1>
              <p className="text-[#00000080] text-lg">You can add a training</p>
              </div>
            <button className="border border-[#896DDB] rounded-[10px] p-3 w-32 ">  Add </button>
          </div>
          <CardContainer
            img={chatgbt}
            title={"Artificial Intelligence"}
            desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
            setIsBlured={setIsBlured}
          />
          <CardContainer
            img={chatgbt}
            title={"Ai"}
            desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
            setIsBlured={setIsBlured}
          />
          <CardContainer
            img={chatgbt}
            title={"Ai"}
            desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
            setIsBlured={setIsBlured}
          />
          <CardContainer
            img={chatgbt}
            title={"Ai"}
            desc="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
            setIsBlured={setIsBlured}
          />
        </div>
      </div>
  );
};


export default Trainings;
