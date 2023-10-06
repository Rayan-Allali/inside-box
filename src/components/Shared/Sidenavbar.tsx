"use client";

import Image from "next/image";
import logo from "@/assets/images/shared/logo.svg";
import Trainees from "@/assets/images/SideNavbar/trainees.svg";
import TraineesBleu from "@/assets/images/SideNavbar/traineesBleu.svg";
import Trainer from "@/assets/images/SideNavbar/trainers.svg";
import TrainerBleu from "@/assets/images/SideNavbar/trainersBleu.svg";
import Trainings from "@/assets/images/SideNavbar/trainings.svg";
import TrainingsBleu from "@/assets/images/SideNavbar/trainingsBleu.svg";
import frame from "@/assets/images/SideNavbar/frame.svg";
import frameBleu from "@/assets/images/SideNavbar/frameBleu.svg";
import Profillogo from "@/assets/images/shared/Profillogo.svg";
import signout from "@/assets/images/SideNavbar/signout.svg";
import leaderBoard from '@/assets/images/SideNavbar/leaderBoard.svg'
import leaderBoardBleu from '@/assets/images/SideNavbar/leaderBoardBleu.svg'
import { useEffect, useState } from "react";
import Link from 'next/link'

interface ISideNavbarProps {
  Route: "General" | "Trainers" | "Trainees" | "Trainings" | "leaderboard" ;
  User?:"Admin" | 'Teacher' | "Student"
}
const index = (props: ISideNavbarProps) => {
  const { Route,User } = props;
  const [Elements, setElements] = useState([
    { name: "General", pic: frame, Bleupic: frameBleu},
    { name: "Trainers", pic: Trainer, Bleupic: TrainerBleu},
    { name: "Trainees", pic: Trainees, Bleupic: TraineesBleu},
    { name: "Trainings", pic: Trainings, Bleupic: TrainingsBleu},
    { name: "leaderboard", pic: leaderBoard, Bleupic: leaderBoardBleu},
  ]);

  useEffect(() => {
    switch (User) {
      case "Admin" || "Teacher" :
        setElements([
          { name: "General", pic: frame, Bleupic: frameBleu},
          { name: "Trainers", pic: Trainer, Bleupic: TrainerBleu},
          { name: "Trainees", pic: Trainees, Bleupic: TraineesBleu},
          { name: "Trainings", pic: Trainings, Bleupic: TrainingsBleu},
          { name: "leaderboard", pic: leaderBoard, Bleupic: leaderBoardBleu},
        ])
        break;
      case "Student"  :
        setElements([
          { name: "General", pic: frame, Bleupic: frameBleu},
          { name: "Trainers", pic: Trainer, Bleupic: TrainerBleu},
          { name: "Trainings", pic: Trainings, Bleupic: TrainingsBleu},
          { name: "leaderboard", pic: leaderBoard, Bleupic: leaderBoardBleu},
        ])
      default:
        break;
    }
  }, []);

  return (
    <div className="w-1/6 flex flex-col justify-between pt-28 h-[100vh] bg-white shadow-sidebar">
      <div className="flex flex-col gap-32 items-center w-full">
        <Image alt="logo" src={logo} />
        <div className="w-full">
          {Elements.map((Elmnt) => {
            return (
              <Link 
                key={Elmnt.name}
                href={`/${Elmnt.name} `}
                className={`flex w-full gap-4 p-5 font-bold justify-center cursor-pointer
          ${
            Route == Elmnt.name
              ? "text-[#07A2F3] bg-[#07a0f30c]"
              : "text-[#79869F]"
          }  `}
              >
                <Image
                  alt="frame"
                  src={Route == Elmnt.name ? Elmnt.Bleupic : Elmnt.pic}
                />
                <h1 className="">{Elmnt.name}</h1>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full h-20 bg-[#896DDB1A] border-t-[#896DDB] border-t border-t-solid flex items-center justify-between p-4 pl-5">
        <div className="flex items-center gap-3">
          <Image alt="Profillogo" src={Profillogo} />
          <div className="text-[#896DDB] ">
            <h1 className="text-lg font-bold "> B.Djamel </h1>
            <p className="text-xs">Super Admin</p>
          </div>
        </div>
        <Image alt="signout" src={signout} />
      </div>
    </div>
  );
};

export default index;