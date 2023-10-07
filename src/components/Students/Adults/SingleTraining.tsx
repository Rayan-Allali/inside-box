'use client'
import notificationIcon from '@/assets/images/shared/notificationIcon.svg'
import Image from 'next/image';
import { useState } from 'react';
import AiImg from "@/assets/images/shared/traningCover.png"
import {BsCheckCircleFill} from "react-icons/bs"
import Dossier from "@/assets/images/shared/dossierTwo.svg"
import addDossier from "@/assets/images/shared/addDossier.svg"
import { useRouter } from 'next/navigation';
import XP from '@/assets/images/shared/XP.svg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


export const SingleTraining=()=>{
    const percentage = 72;

    const router = useRouter();
    const [training,setTraining] = useState(
        {
            id:"0",
            title:"AI",
            desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
            img:AiImg,
            exp:120
        },
    )

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

    const handleDossierClick=(ressourceId:string)=>{
        router.push(`/${ressourceId}`)
    }

    return(
    <div className='p-[40px]'>
    <div className='flex justify-between items-center '  >
                <div className="flex flex-col gap-[10px] ">
                    <h1 className="text-3xl font-bold">Welcome to Your Trainings Programs</h1>
                    <p className="text-xl">You can control accounts of trainers , trainees , and trainings  ! </p>
                </div>
            <div className='flex gap-[48px]'>
                <button className=' items-center text-xl font-bold text-white bg-[#896DDB] flex justify-around w-[125px] px-[20px] py-[16px] rounded-[8px]'>
                     <Image src={XP} alt="XP"  width={24} height={24} /> 0 XP 
                </button>
                <Image src={notificationIcon.src} alt="notification"  width={28} height={28} />
            </div>
    </div>
    <div className='py-20 h-full flex justify-between'>
        <div className="flex flex-col justify-between basis-[35%]">
       <div>
       <div className="flex justify-between w-full mb-10">
            <h3 className="text-3xl font-bold text-[#676C72] ">{training.title}</h3>
            <h2 className="text-3xl font-bold text-[#676C72]">{training.exp} Exp</h2>
        </div> 
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-8'>
                {courses.map((course,index) =>{
                    return(
                        <div key={index} className="flex gap-2 mt-5 items-end">
                            {course.status === 'completed' ? <BsCheckCircleFill color={"#38CFBA"} size={22} /> : <p></p> }
                            <h2 className="text-2xl " style={{color:course.status === 'next' ? "#414141" : "#676C72"}}>{course.title}</h2>
                        </div>
                        
                    )
                    }
                )}
            </div>
            <div className='w-[160px]'>
                <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    rotation: 0,
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(7, 162, 243, ${percentage / 100})`,
                    textColor: '#0F3F62',
                    trailColor: '#E2F4F8',
                    backgroundColor: '#07A2F3',
                })}
                />
            </div>
        </div>
       </div>

        </div>
        <div className="basis-[60%] rounded-md">
                <Image className='w-full h-full' src={training.img} alt="training img" />
        </div>
    </div>
    <div className='flex flex-col gap-10'>
                <h2 className='font-bold text-xl'>Ressources</h2>
                <div className='grid grid-cols-6 gap-10'>
{courses.map((course,index)=>{
        return(
             <div className='flex items-center flex-col'>
                <div onClick={()=>handleDossierClick(`chapitre${index}`)}><Image src={Dossier.src}  alt="dossier" width={140} height={135}/></div>
                <h1 className='text-[#896DDB] text-xl font-bold mt-5'>Chapitre {index}</h1>
               </div> 
        )          
})}
                </div>
    </div>
    </div>
    )
}

export default SingleTraining