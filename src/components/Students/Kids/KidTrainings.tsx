'use client';
import XP from '@/assets/images/shared/XP.svg'
import { useState } from 'react'
import CardContainer from '../../Admin/CourseContainer'
import AiImg from "@/assets/images/courses/chatgpt.svg"
import Image from 'next/image';

const KidTrainings = () => {
    const [cards,setCards] = useState<any[]>(
        [{
             id:"0",
             title:"AI",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             img:AiImg
         },
         {
             id:"1",
             title:"AI",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             img:AiImg
         },
         {
            id:"2",
            title:"AI",
            desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
            img:AiImg
        }]
     )
     return(
 <div className='p-[40px]'>
 <div className='flex justify-between items-center '  >
             <div className="flex flex-col gap-[10px] ">
                 <h1 className="text-4xl font-bold">Welcome to Your Trainings Programs</h1>
             </div>
         <button className=' items-center text-xl font-bold text-white bg-[#896DDB] flex justify-around w-[125px] px-[20px] py-[16px] rounded-[8px]'>
            <Image src={XP} alt="XP"  width={24} height={24} /> 0 XP 
         </button>
         </div>
         <div className='grid grid-cols-4 gap-8 py-[40px]  '>
             {cards.map((card,index)=>{
                 return(
                    <div className='scale-[1.1] px-4'>
                        <CardContainer key={index} title={card.title} desc={card.desc} img={card.img}  />
                    </div>    
                 )
             })}
         </div>
         <hr></hr>
         <h2 className='text-[24px] py-[32px]'>Completed trainings</h2>
         <div className='scale-[1.1] pl-20'>
             <CardContainer key={2} title={cards[2].title} desc={cards[2].desc} img={cards[2].img} />
         </div>
 </div>
  )
}

export default KidTrainings