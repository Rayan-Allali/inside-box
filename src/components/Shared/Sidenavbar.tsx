"use client";
import Link from 'next/link'
import Image from "next/image";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

// Components
import LogOutWindow from '@/components/Shared/PopupsWindows/LogOutWindow'

// Images
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
import Logout from "@/assets/images/SideNavbar/signout.svg";
import leaderBoard from '@/assets/images/SideNavbar/leaderBoard.svg'
import leaderBoardBleu from '@/assets/images/SideNavbar/leaderBoardBleu.svg'

interface ISideNavbarProps {
  Route: string ;
  User?:string
  setIsBlured: Function;
}

const index = (props: ISideNavbarProps) => {
  const { Route, User, setIsBlured } = props;

  const [Elements, setElements] = useState<any>();

  useEffect(() => {
    switch (User) {
      case "Admin" :
        setElements([
          { name: "General", pic: frame, route:"Admin/General" , Bleupic: frameBleu},
          { name: "Trainers", pic: Trainer, route:"Admin/Trainers" , Bleupic: TrainerBleu},
          { name: "Trainees", pic: Trainees, route:"Admin/Trainees" , Bleupic: TraineesBleu},
          { name: "Trainings", pic: Trainings, route:"Admin/Trainings" , Bleupic: TrainingsBleu},
          { name: "leaderboard", pic: leaderBoard, route:"Admin/leaderboard" , Bleupic: leaderBoardBleu},
        ])
        break;
      case "StudentAdult"  :
        setElements([
          { name: "General", pic: frame, route:"StudentAdult/General", Bleupic: frameBleu},
          { name: "Trainers", pic: Trainer, route:"StudentAdult/Trainers", Bleupic: TrainerBleu},
          { name: "Trainings", pic: Trainings, route:"StudentAdult/Trainings", Bleupic: TrainingsBleu},
          { name: "leaderboard", pic: leaderBoard, route:"StudentAdult/leaderboard", Bleupic: leaderBoardBleu},
        ])
        break;
        case "StudentKids"  :
          setElements([
            { name: "General", pic: frame, route:"StudentKids/General", Bleupic: frameBleu},
            { name: "Trainers", pic: Trainer, route:"StudentKids/Trainers", Bleupic: TrainerBleu},
            { name: "Trainings", pic: Trainings, route:"StudentKids/Trainings", Bleupic: TrainingsBleu},
            { name: "leaderboard", pic: leaderBoard, route:"StudentKids/leaderboard", Bleupic: leaderBoardBleu},
          ])
          break;
        case "Teacher"  :
          setElements([
            { name: "My Students", pic: frame, route:"Teacher/Trainees", Bleupic: frameBleu},
            { name: "My Trainings", pic: Trainings, route:"Teacher/Trainings", Bleupic: TrainingsBleu},
            { name: "leaderboard", pic: leaderBoard, route:"Teacher/leaderboard", Bleupic: leaderBoardBleu},
          ])
          break;
          default: 
          setElements([
            { name: "General", pic: frame, route:"Teacher/General" , Bleupic: frameBleu},
            { name: "Trainers", pic: Trainer, route:"Teacher/Trainers" , Bleupic: TrainerBleu},
            { name: "Trainees", pic: Trainees, route:"Teacher/Trainees" , Bleupic: TraineesBleu},
            { name: "Trainings", pic: Trainings, route:"Teacher/Trainings" , Bleupic: TrainingsBleu},
            { name: "leaderboard", pic: leaderBoard, route:"Teacher/leaderboard" , Bleupic: leaderBoardBleu},
          ])
          break;
    }
  }, []);

  const handleLogout = (closeFunction:Function) => (e:MouseEvent) => {
    e.preventDefault()
    closeFunction()
  }

  return (
    <div className="w-1/6 flex flex-col justify-between pt-28 h-[100vh] bg-white drop-shadow-sidebar">
      <div className="flex flex-col gap-32 items-center w-full">
        <Image alt="logo" src={logo} />
        <div className="w-full">
          { Elements && Elements.map((Elmnt:any,index:any) => {
            return (
              <Link 
                key={index}
                href={`/${Elmnt.route} `}
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
        <Popup
            trigger={
              <Image alt="logout" src={Logout} className='cursor-pointer'/>
            }
            modal
            nested
            onOpen={() => setIsBlured(true)}
            onClose={() => setIsBlured(false)}
          >
            {(close) => {
              return (
                <LogOutWindow actionHandler={handleLogout(close)} cancelHandler={close} />
              )}
            }
          </Popup>
      </div>
    </div>
  );
};

export default index;
