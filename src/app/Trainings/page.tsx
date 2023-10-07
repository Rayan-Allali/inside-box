'use client'
import { ReactElement, useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { useRouter } from 'next/navigation'

// Components
import Header from "@/components/Shared/Header";
import CardContainer from "@/components/Admin/CourseContainer";

// Images
import chatgbt from "@/assets/images/courses/chatgpt.svg";

// Mock data
import data from './data.js'

type Training = {
  img: any;
  title: string;
  desc: string;
}

export default function Home() {
  const [isBlured, setIsBlured] = useState(false);
  const [ trainings, setTrainings ] = useState<Training[]>([]);
  const router = useRouter()

  useEffect(() => {
    setTrainings(data);
  }, [])

  const handleDelete = (title: string) => {
    setTrainings(prev => prev.filter(training => training.title !== title))
  }
  return (
    <main className="p-10 py-14 max-h-screen overflow-y-scroll">
      {/* <Trainings /> */}
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
            <button className="border border-[#896DDB] rounded-[10px] p-3 w-32 "onClick={()=>{router.push('/Trainings/AddTraining')}} >  Add </button>
          </div>
          {trainings.map(training => {
            return (
              <CardContainer
                key={training.title}
                img={training.img}
                title={training.title}
                desc={training.desc}
                setIsBlured={setIsBlured}
                handleDelete={handleDelete}
                IsAdmin
              />
            )
          })}
        </div>
      </div>
    </main>
  );
}
