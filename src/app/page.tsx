import Image from "next/image";
import SignIn from "@/components/SignIn";
import SideNavbar from "@/components/Shared/SideNavbar";
import Trainings from "@/components/Admin/Trainings";
import AddTrainer from "@/components/Admin/Trainers/AddTrainer";
import EditTrainer from "@/components/Admin/Trainers/EditTrainer";
import AddTrainee from "@/components/Admin/Trainees/AddTrainee";
import EditTrainee from "@/components/Admin/Trainees/EditTrainee";

export default function Home() {
  // route detection

  // components selection

  // conditional rendering

  return (
    <main>
      {/* <SignIn /> */}
      {/* <Trainings/> */}
      {/* <AddTrainer/> */}
      {/* <EditTrainer/> */}
      {/* <AddTrainee/> */}
      <EditTrainee/>
    </main>
  );
}
