"use client";
import React, { useState } from 'react'
import AssignmentContainer from '../AssignmentContainer';

const KidAssignement = () => {
    const [assignement,setAssignement] = useState<any[]>(
        [{
             id:"0",
             title:"Title",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             Deadline:"07/10/2023",
             Chapter: "02",
             Status: "unSubmited"
         },
         {
             id:"1",
             title:"Title",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             Deadline:"07/10/2023",
             Chapter: "02",
             Status: "Submited"
         },
         {
            id:"2",
            title:"Title",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             Deadline:"07/10/2023",
             Chapter: "02",
             Status: "Submited"
        },
        {
            id:"3",
            title:"Title",
             desc:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
             Deadline:"07/10/2023",
             Chapter: "02",
             Status: "Submited"
        }]
     )

  return (
    <div className='p-[40px]'>
 <div className='flex justify-between items-center '  >
             <div className="flex flex-col gap-[10px] ">
                 <h1 className="text-4xl font-bold">Welcome to Your Trainings Programs</h1>
             </div>
         
         </div>
         <div className='grid grid-cols-4 gap-8 py-[80px]  '>
             {assignement.map((assignement,index)=>{
                 return(
                         <AssignmentContainer key={index} title={assignement.title} desc={assignement.desc} Deadline={assignement.Deadline} Chapter={assignement.Chapter} Status={assignement.Status}/>
                 )
             })}
         </div>
 </div>
  )
}

export default KidAssignement