'use client'

// Images

// Mock data
import { TeacherTraining } from "@/components/teacher/Training";

type Training = {
  img: any;
  title: string;
  desc: string;
}

export default function Home() {
 
  return (
    <main className="p-10 py-14 max-h-screen overflow-y-scroll">
      <TeacherTraining/>
    </main>
  );
}
