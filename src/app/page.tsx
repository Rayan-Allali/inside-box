import Image from "next/image";
import SignIn from "@/components/SignIn";
import SideNavbar from "@/components/Shared/Sidenavbar";
import Trainings from "@/components/Admin/Trainings";
import AddTrainer from "@/components/Admin/Trainers/AddTrainer";
import EditTrainer from "@/components/Admin/Trainers/EditTrainer";
import AddTrainee from "@/components/Admin/Trainees/AddTrainee";
import EditTrainee from "@/components/Admin/Trainees/EditTrainee";
import AddTraining from "@/components/Admin/Trainings/AddTraining";
import AdultStudentGeneral from "@/components/AdultStudentGeneral/AdultStudentGeneral";
import AdultStudentRes from "@/components/AdultStudentGeneral/AdultStudentRessources";

export default function Home() {
  // route detection

  // components selection

  // conditional rendering

  return (
    <main>
      {/* <SignIn /> */     }
      {/* <Trainings/> */   }
      {/* <AddTrainer/>*/   }
      {/* <EditTrainer/> */ }
      {/* <AddTrainee/> */  }
      {/* <EditTrainee/> */ }
      {/* <AddTraining/> */ }
      {/*<AdultStudentGeneral/>*/}
      
      <AdultStudentRes/>
      
    </main>
  );
}
