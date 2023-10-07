'use client'
import notificationIcon from '@/assets/images/shared/notificationIcon.svg'
import Image from 'next/image';
import { useState } from 'react';
import Aimg from "@/assets/images/shared/AICover.png"
import loop from "@/assets/images/shared/loop.svg"
import hr from "@/assets/images/shared/hr.svg"
import { useRouter } from 'next/navigation';
import XP from '@/assets/images/shared/XP.svg'


export const KidNewSingle=()=>{
    

    const router = useRouter();
    const [training,setTraining] = useState(
        {
            id:"0",
            title:"AI For Kids",
            desc:"Open Ai Course - Advanced ",
            img:Aimg,
            exp:120
        },
    )


    const handleDossierClick=(ressourceId:string)=>{
        router.push(`/${ressourceId}`)
    }

    return(
    <div className='p-[40px]'>
    <div className='flex justify-between items-center '  >
                <div className="flex flex-col gap-[10px] ">
                    <h1 className="text-4xl font-bold">Welcome to Your Trainings Programs</h1>
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
       <div className="flex justify-between w-ful">
            <h3 className="text-3xl font-bold text-[#676C72] ">{training.title}</h3>
            <h2 className="text-3xl font-bold text-[#676C72]">{training.exp} Exp</h2>
        </div>
        <p className='text-[#676C72] text-[24px] font-light py-[4%] mb-[64px]'>{training.desc}</p>
        <button className='bg-[#38CFBA] w-[348px] font-extrabold text-white text-[28px] h-[100px] rounded-[8px]'>
        Enroll Now
                    </button> 
       </div>

        </div>
        <div className="basis-[60%] rounded-md">
                <Image className='w-full h-full' src={training.img} alt="training img" />
        </div>
    </div>
    <div className='flex flex-col gap-48'>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-[32px]'>
                <div className='flex gap-8'>
                    <Image alt="watch" src={hr}/>
                    <p className='text-[24px]'>45 heures Durée</p>
                </div>
                <div className='flex gap-8'>
                    <Image alt="loop" src={loop}/>
                    <p className='text-[24px]'>24 août 2023 Dernière mise à jour</p>
                </div>
            </div>

            <div className='flex flex-col gap-[32px]'>
                <p className='text-[24px] font-bold'>
                Prérequis
                </p>
                <p className='text-[24px]'>8-14 ans</p>
            </div>

            <div className='flex flex-col gap-[32px]'>
                <p className='text-[24px] font-bold'>
                Public
                </p>
                <p className='text-[24px]'>8-14 ans</p>
            </div>
            <div className='flex flex-col gap-[32px]'>
                <p className='text-[24px] font-bold'>
                Étiquettes
                </p>
                <div>
                    <p className='text-[24px]'>Kids</p>
                    <p className='text-[24px]'>STEM</p>
                </div>
            </div>
        </div>
              <p className='text-[24px]'>
              À propos du cours
Présentation de la formation

KEY BOX vous propose un programme d’apprentissage de robotique destiné aux enfants à partir de 8 ans basé sur la STEM éducation. Sous l’encadrement d’une équipe d’ingénieurs pluridisciplinaires titulaires des premiers prix à différents concours et hackathon technologiques nationaux et internationaux.Notre programme vise à inspirer le sens de créativité et à cultiver l’esprit d’invention et d’innovation dès le plus jeune âge

Objectif de la formation

· Introduction à la robotique : Découverte des bases de la robotique, conception et programmation de robots simples.· Défis de robotique : Participation à des défis pratiques pour améliorer les compétences en résolution de problèmes et en créativité.· Assemblage de robots : Apprendre à construire des robots en utilisant des pièces ou des kits adaptés.· Programmation visuelle : Utiliser la programmation visuelle pour contrôler les mouvements et les actions des robots.· Esprit d’équipe : Travailler en groupe pour relever les défis avec communication et collaboration.· Stimuler la créativité : Encourager les enfants à exprimer leur créativité tout en apprenant.· Pas de prérequis : Adapté aux débutants et aux enfants de tous niveaux.

Contenu de la formation

La alpha est une formation d’apprentissage de robotique continue, dédié à tous les fans de nouvelle technologie et à la robotique en particulier.
La formation s’étale sur 30 séances de formation sous forme d’atelier, 1h30 par atelier soit donc un volume horaire de 45h.
La formation sera divisé en 3 paliers chaque palier comprend 10 ateliers à la fin de chaque palier l’étudiants mettra en pratique ce qu’il a appris sous forme d’un mini projet.
              </p>
    </div>
    </div>
    )
}

export default KidNewSingle