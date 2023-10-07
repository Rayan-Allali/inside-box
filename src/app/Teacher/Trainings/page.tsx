'use client'
import { ReactElement, useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { useRouter } from 'next/navigation'

// Components
import Header from "@/components/Shared/Header";
import CardContainer from "@/components/Admin/CourseContainer";

// Images
import chatgbt from "@/assets/images/courses/chatgpt.svg";

// Mock data
import { TeacherGeneral } from "@/components/teacher/myTrainings";

export default function Home() {
 
  return (
    <main className="p-10 py-14 max-h-screen overflow-y-scroll">
      <TeacherGeneral></TeacherGeneral>
    </main>
  );
}
