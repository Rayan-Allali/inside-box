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

import "./globals.css";
import {TrainingRessources} from "@/components/teacher/ressouces/TrainingRessource"
export default function Home() {
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
