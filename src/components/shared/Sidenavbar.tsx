"use client";

import Image from "next/image";
import logo from "@/assests/images/shared/logo.svg";
import Trainees from "@/assests/images/SideNavbar/trainees.svg";
import TraineesBleu from "@/assests/images/SideNavbar/traineesBleu.svg";
import Trainer from "@/assests/images/SideNavbar/trainers.svg";
import TrainerBleu from "@/assests/images/SideNavbar/trainersBleu.svg";
import Trainings from "@/assests/images/SideNavbar/trainings.svg";
import TrainingsBleu from "@/assests/images/SideNavbar/trainingsBleu.svg";
import frame from "@/assests/images/SideNavbar/frame.svg";
import frameBleu from "@/assests/images/SideNavbar/frameBleu.svg";
import Profillogo from "@/assests/images/shared/Profillogo.svg";
import signout from "@/assests/images/SideNavbar/signout.svg";
import { useEffect, useState } from "react";

interface ISideNavbarProps {
  Route: string;
}
const index = (props: ISideNavbarProps) => {
  const { Route } = props;
  const [Elements, setElements] = useState([
    { name: "General", pic: frame, Bleupic: frameBleu, route: "" },
    { name: "Trainers", pic: Trainer, Bleupic: TrainerBleu, route: "" },
    { name: "Trainees", pic: Trainees, Bleupic: TraineesBleu, route: "" },
    { name: "Trainings", pic: Trainings, Bleupic: TrainingsBleu, route: "" },
  ]);

  useEffect(() => {
    // logic to set Elements according to user role
  }, []);

  return (
    <div className="w-1/6 flex flex-col justify-between pt-28 h-[100vh] bg-white ">
      <div className="flex flex-col gap-32 items-center w-full ">
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
        <Image alt="signout" src={signout} />
      </div>
    </div>
  );
};

export default index;
