import "@/app/globals.css";
import { TeacherTraining } from "@/components/teacher/Training";
import { TeacherGeneral } from "@/components/teacher/myTrainings";

import AdultStudentGeneral from "@/components/Student/AdultStudentGeneral/AdultStudentGeneral";
export default function Home() {
  return (
    <main>
   <AdultStudentGeneral></AdultStudentGeneral>
    </main>
  );
}
