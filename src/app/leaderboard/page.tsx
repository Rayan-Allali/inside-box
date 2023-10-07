import leaderBoard from '@/assets/images/leaderBoard/leaderboardIcon.svg'
import Image from "next/image";
import researchIcon from "@/assets/images/shared/researchIcon.svg"
import Header from "@/components/Shared/Header";
export default function Home() {
    const data = [
        {
          rank: 1,
          traineeName: 'John Doe',
          completedCourses: 5,
          lastXP4: 80,
          xp: 2000,
        },
        {
          rank: 2,
          traineeName: 'Jane Smith',
          completedCourses: 3,
          lastXP4: 75,
          xp: 1800,
        },
        {
          rank: 3,
          traineeName: 'Alice Johnson',
          completedCourses: 4,
          lastXP4: 90,
          xp: 2200,
        },
        {
          rank: 4,
          traineeName: 'Bob Wilson',
          completedCourses: 6,
          lastXP4: 85,
          xp: 2100,
        },
        {
          rank: 5,
          traineeName: 'Eva Adams',
          completedCourses: 2,
          lastXP4: 70,
          xp: 1600,
        },
        {
          rank: 6,
          traineeName: 'Michael Brown',
          completedCourses: 7,
          lastXP4: 95,
          xp: 2400,
        },
      ];
    return (
      <main  className="p-20 py-14  max-h-screen overflow-y-scroll" >
        <Header  title="Leader Board" subtitle="You can control accounts of trainers , trainees , and trainings  ! " />
        <div className="flex mt-12 items-center justify-between">
            <Image alt="leaderboardIcon" src={leaderBoard} />
            <div className="w-min h-min relative">
            <input type="text" className="p-3 px-8 border-[#00000047] pl-10 border rounded-lg"  placeholder='Search' />
            <Image alt="researchIcon" src={researchIcon} className='absolute top-1/2 -translate-y-1/2 left-3' />
            </div>
     
        </div>
        <table className="w-full mt-16 ">
        <thead>
          <tr className='text-2xl'>
            <th className="px-4 text-start ">Rank</th>
            <th className="px-4 text-start ">  Trainee name </th>
            <th className="px-4 text-start ">Completed Courses</th>
            <th className="px-4 text-start ">Last XP 4</th>
            <th className="px-4 text-start ">XP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index} className="border-t border-gray-300 text-[#828387] text-lg ">
              <td className="px-4 py-4 pt-8 ">{d.rank}</td>
              <td className="px-4 py-4 pt-8 ">{d.traineeName}</td>
              <td className="px-4 py-4 pt-8 ">{d.completedCourses}</td>
              <td className="px-4 py-4 pt-8 ">{d.lastXP4}</td>
              <td className="px-4 py-4 pt-8 ">{d.xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
    );
  }
