"use client";
import arrowDown from "@/assets/images/shared/arrowDown.svg";
import Image from "next/image";
import researchIcon from "@/assets/images/shared/researchIcon.svg";
import deletIcon from "@/assets/images/shared/delete.svg";
import editIcon from "@/assets/images/shared/edit.svg";
import Header from "@/components/Shared/Header";
import { useRouter } from "next/navigation";
export default function Home() {
  const data = [
    {
      rank: 1,
      traineeName: "John Doe",
      completedCourses: 5,
      lastXP4: 80,
      xp: 2000,
    },
    {
      rank: 2,
      traineeName: "Jane Smith",
      completedCourses: 3,
      lastXP4: 75,
      xp: 1800,
    },
    {
      rank: 3,
      traineeName: "Alice Johnson",
      completedCourses: 4,
      lastXP4: 90,
      xp: 2200,
    },
    {
      rank: 4,
      traineeName: "Bob Wilson",
      completedCourses: 6,
      lastXP4: 85,
      xp: 2100,
    },
    {
      rank: 5,
      traineeName: "Eva Adams",
      completedCourses: 2,
      lastXP4: 70,
      xp: 1600,
    },
    {
      rank: 6,
      traineeName: "Michael Brown",
      completedCourses: 7,
      lastXP4: 95,
      xp: 2400,
    },
  ];
  const router = useRouter();
  return (
    <main className="p-10 py-14">
      <Header
        title="Welcome to the Trainees Page"
        subtitle="You can control accounts of trainees ! "
      />
      <div className="flex mt-12 items-center justify-between">
        <button
          className="p-3 text-white rounded-lg bg-[#38CFBA] justify-center w-28 flex gap-2 items-center"
          onClick={() => router.push("/Trainees/AddTrainee")}
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
          <button className="p-3 text-white rounded-lg bg-[#896DDB] justify-center w-32 flex gap-2 items-center">
            <p className="">Training</p>
            <Image alt="arrowDown" src={arrowDown} />
          </button>
        </div>
      </div>
      <table className="w-full mt-16 ">
        <thead>
          <tr className="text-2xl mb-4 ">
            <th className="px-4 text-start ">Username</th>
            <th className="px-4 text-start "> Number of Trainings </th>
            <th className="px-4 text-start ">XP</th>
            <th className="px-4 text-start "></th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr
              key={index}
              className={`text-[#828387] text-xl ${index == 0 && "border-t "} `}
            >
              <td className="px-4 py-4 pt-6 ">{d.rank}</td>
              <td className="px-4 py-4 font-bold ">{d.traineeName}</td>
              <td className="px-4 py-4 font-bold ">{d.completedCourses}</td>
              <td className="py-4 flex gap-1 items-center justify-end ">
                <button className="border border-[#37373740] rounded-[5px] w-16 flex items-center justify-center h-10 "
                onClick={()=>router.push('/Trainees/5/EditTrainee')}
                >
                  <Image alt="editIcon" src={editIcon} />
                </button>
                <button className="border border-[#37373740] rounded-[5px] w-16 flex items-center justify-center h-10 ">
                  <Image alt="deleticon" src={deletIcon} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
