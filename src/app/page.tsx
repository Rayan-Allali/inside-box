import SignIn from "@/components/SignIn";

import SideNavbar from "@/components/Shared/Sidenavbar";
import Trainings from "@/components/Admin/Trainings";
import AddTrainer from "@/components/Admin/Trainers/AddTrainer";
import EditTrainer from "@/components/Admin/Trainers/EditTrainer";
import AddTrainee from "@/components/Admin/Trainees/AddTrainee";
import EditTrainee from "@/components/Admin/Trainees/EditTrainee";
import AddTraining from "@/components/Admin/Trainings/AddTraining";
import AdultStudentGeneral from "@/components/Student/AdultStudentGeneral/AdultStudentGeneral";
import AdultStudentRes from "@/components/Student/AdultStudentGeneral/AdultStudentRessources";
import TestQuiz from "@/components/Student/AdultStudentGeneral/TestQuiz";
import "./globals.css";

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
      {/* <AdultStudentRes/>*/}
      <TestQuiz/>
  
    </main>
  );
}
