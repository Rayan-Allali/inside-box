import Image from "next/image";
import SignIn from "@/components/SignIn";
import Trainings from "@/components/Admin/Trainings";
import AddTrainer from "@/components/Admin/Trainers/AddTrainer";
import EditTrainer from "@/components/Admin/Trainers/EditTrainer";
import AddTrainee from "@/components/Admin/Trainees/AddTrainee";
import EditTrainee from "@/components/Admin/Trainees/EditTrainee";
import AddTraining from "@/components/Admin/Trainings/AddTraining";
import './globals.css'
import { TeacherTraining } from "@/components/teacher/Training";


export default function Home() {
  // route detection

  // components selection

  // conditional rendering

  return (
    <main>
     <TeacherTraining />
    </main>
  );
}
