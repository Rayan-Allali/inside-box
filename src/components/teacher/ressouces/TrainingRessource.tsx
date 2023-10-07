'use client'
import { useState } from "react"
import { ChapitreRessource } from "./chapitreRessources"

export const TrainingRessources=()=>{

    const [courses,setCourses] = useState([
        {
            title:"math basics",
            status:"completed"
        },
        {
            title:"machine learning",
            status:"next"
        },
        {
            title:"deep learning",
            status:"not completed"
        }
    ])
    return(
        <div className="p-[40px]">
            <div className="flex flex-col gap-[10px] ">
                    <h1 className="text-3xl font-bold">Add ressources to your chapters </h1>
                    <p className="text-xl">You can control accounts of trainers , trainees , and trainings  !  </p>
            </div>
            <div className="pt-10 flex gap-5">
        {courses.map(((course,index)=>{
            return(
                <div className="bg-[#38CFBA] border border-[#38CFBA] py-5 px-6 rounded-md text-white flex justify-center items-center">
                    <h1 className="font-bold">Ch{index + 1} : {course.title}</h1>
                </div>
            )
        }))}
        <div>
        
        </div>
            </div>
            
        <ChapitreRessource chapNbr={1} />
        </div>
    )
}