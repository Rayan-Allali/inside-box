'use client'

import Image from "next/image"
import PdfImage from "@/assets/images/shared/Pdf.png"
import MeetImage from "@/assets/images/shared/meet.png"
interface props{
    chapNbr:number
}
interface ressourceType{
    title:string
    type:"pdf" | "meet"
}
export const ChapitreRessource=({chapNbr}:props)=>{
    const ressources:ressourceType[] =[
        {
            title:"serie d’exo unit 1",
            type:"pdf"
        },
        {
            title:"cours unit 1",
            type:"pdf"
        },
        {
            title:"serie d’exo unit 1",
            type:"pdf"
        },
        {
            title:"serie d’exo unit 2",
            type:"pdf"
        },
        {
            title:"online meet n:1",
            type:"meet"
        }
    ]
    return(
<div className="p-10 bg-[#FBFBFB] ">
<div className="flex justify-between mt-10 pb-10">
   <h3 className="text-xl underline-offset-1 font-bold"> Chapitre {chapNbr} Ressources :   </h3>
   <button className="text-white rounded-md bg-[#07A2F3] text-[20px] py-3 px-6">upload</button>
</div>
<div className='grid grid-cols-6 gap-10'>
{
    ressources.map(ressource=>{
        return(
            <div className="flex items-center justify-center flex-col gap-5">

                <div >
                <Image src={ressource.type ? PdfImage.src : MeetImage} alt="pdf image" width={75} height={96} />
                </div>
                
                <h1 className='text-black text-xl'>{ressource.title}</h1>
            
            </div>
           

        )
    })
}
</div>
</div>
    )
}