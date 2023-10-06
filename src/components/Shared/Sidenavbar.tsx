"use client";
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

interface ISideNavbarProps {
  Route: "General" | "Trainers" | "Trainees" | "Trainings";
  setIsBlured: Function;
}
const index = (props: ISideNavbarProps) => {
  const { Route, setIsBlured } = props;
  const [Elements, setElements] = useState([
    { name: "General", pic: frame, Bleupic: frameBleu, route: "" },
    { name: "Trainers", pic: Trainer, Bleupic: TrainerBleu, route: "" },
    { name: "Trainees", pic: Trainees, Bleupic: TraineesBleu, route: "" },
    { name: "Trainings", pic: Trainings, Bleupic: TrainingsBleu, route: "" },
  ]);

  useEffect(() => {
    // logic to set Elements according to user role
  }, []);

  const handleLogout = (closeFunction:Function) => (e:MouseEvent) => {

  }

  return (
    <div className="w-1/6 flex flex-col justify-between pt-28 h-[100vh] bg-white shadow-sidebar">
      <div className="flex flex-col gap-32 items-center w-full">
        <Image alt="logo" src={logo} />
        <div className="w-full">
          {Elements.map((Elmnt) => {
            return (
              <div
                key={Elmnt.name}
                className={`flex w-full gap-4 p-5 font-bold justify-center 
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
              </div>
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
              <Image alt="logout" src={Logout}/>
            }
            modal
            onOpen={() => setIsBlured(true)}
            onClose={() => setIsBlured(false)}
            nested
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
