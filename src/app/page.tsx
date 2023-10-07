import SignIn from "@/components/SignIn";
import "./globals.css";
import { TeacherTraining } from "@/components/teacher/Training";
import { TeacherGeneral } from "@/components/teacher/myTrainings";
import TrainingRessources from "@/components/teacher/ressouces/TrainingRessource";
import TalkingBox from "@/components/Student/kids/meetings/TalkingBox";
import OnlineClass from "@/components/Student/kids/meetings/OnlineClass";
import AdultStudentGeneral from "@/components/Student/AdultStudentGeneral/AdultStudentRessources";
// import AdultStudentGeneral from "@/components/Student/AdultStudentGeneral/AdultStudentGeneral"; li khs fiha lfo9
export default function Home() {
  return (
    <main>
 <SignIn />  
    </main>
  );
}
