"use client";
import arrowDown from "@/assets/images/shared/arrowDown.svg";
import Image from "next/image";
import { useState, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import Popup from "reactjs-popup";
import ActionWithPasswordWindow from "@/components/Shared/PopupsWindows/ActionWithPasswordWindow";

// Images
import researchIcon from "@/assets/images/shared/researchIcon.svg";
import deletIcon from "@/assets/images/shared/delete.svg";
import editIcon from "@/assets/images/shared/edit.svg";
import Header from "@/components/Shared/Header";

// Mock data
import data from "./data.js";

export default function Home() {
  const [trainers, setTrainers] = useState<
    {
      rank: number;
      trainerName: string;
      completedCourses: number;
      lastXP4: number;
      xp: number;
    }[]
  >([]);
  const [isBlured, setIsBlured] = useState(false);

  useEffect(() => {
    setTrainers(data);
  }, []);

  const goToAddTrainerPage = () => {
    // router.push()
  };

  const handleDelete =
    (username: string, closeFunction: Function) => (e: MouseEvent) => {
      setTrainers((prev) =>
        prev.filter((trainer) => trainer.trainerName !== username)
      );
      console.log(`${username} deleted`);

      closeFunction();
    };

  const router = useRouter();

  return (
    <main className={`p-10 py-14 max-h-screen overflow-y-scroll ${isBlured ? "blur-[5px]" : ""}`}>
      <Header
        title="Welcome to the Trainers Page "
        subtitle="You can control accounts of trainers ! "
      />

      <div className="flex mt-12 items-center justify-between">
        <button
          type="button"
          className="p-3 text-white rounded-lg bg-[#38CFBA] justify-center w-28 flex gap-2 items-center"
          onClick={() => router.push("/Trainers/AddTrainers")}
        >
          <p className=""> Add </p>
          <p className=""> + </p>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-min h-min relative">
            <input
              type="text"
              className="p-3 px-8 border-[#00000047] pl-10 border rounded-lg"
              placeholder="Search"
            />
            <Image
              alt="researchIcon"
              src={researchIcon}
              className="absolute top-1/2 -translate-y-1/2 left-3"
            />
          </div>
          <button
            type="button"
            className="p-3 text-white rounded-lg bg-[#896DDB] justify-center w-32 flex gap-2 items-center"
          >
            <p className="">Training</p>
            <Image alt="arrowDown" src={arrowDown} />
          </button>
        </div>
      </div>
      <table className="w-full mt-16 ">
        <thead>
          <tr className="text-2xl mb-4 ">
            <th className="px-4 text-start ">Username</th>
            <th className="px-4 text-start "> Trainings </th>
            <th className="px-4 text-start "></th>
          </tr>
        </thead>
        <tbody>
          {trainers.map((d, index) => (
            <tr
              key={index}
              className={`text-[#828387] text-xl ${index == 0 && "border-t "} `}
            >
              <td className="px-4 py-4 pt-6 ">{d.rank}</td>
              <td className="px-4 py-4 font-bold ">{d.trainerName}</td>
              <td className="py-4 flex gap-1 items-center justify-end ">
                <button
                  type="button"
                  className="border border-[#37373740] rounded-[5px] w-16 flex items-center justify-center h-10 "
                  onClick={() => router.push("/Trainers/2/EditTrainer")}
                >
                  <Image alt="editIcon" src={editIcon} />
                </button>

                <Popup
                  trigger={
                    <button
                      type="button"
                      title="delete trainer"
                      className="border border-[#37373740] rounded-[5px] w-16 flex items-center justify-center h-10 "
                    >
                      <Image alt="deleticon" src={deletIcon} />
                    </button>
                  }
                  modal
                  onOpen={() => setIsBlured(true)}
                  onClose={() => setIsBlured(false)}
                  nested
                >
                  {(close) => {
                    return (
                      <ActionWithPasswordWindow
                        title="Confirm the operation"
                        leftText="Delete"
                        rightText="Cancel"
                        actionHandler={handleDelete(d.trainerName, close)}
                        cancelHandler={close}
                      />
                    );
                  }}
                </Popup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
