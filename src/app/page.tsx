import Image from "next/image";
import SignIn from "@/components/SignIn";
import Trainings from "@/components/Admin/Trainings";
import AddTrainer from "@/components/Admin/Trainers/AddTrainer";
import EditTrainer from "@/components/Admin/Trainers/EditTrainer";
import AddTrainee from "@/components/Admin/Trainees/AddTrainee";
import EditTrainee from "@/components/Admin/Trainees/EditTrainee";
import AddTraining from "@/components/Admin/Trainings/AddTraining";
import AdultStudentGeneral from "@/components/Students/Adults/AdultStudentGeneral";
import MyTrainings from "@/components/Students/Adults/MyTrainings";
import Assignement from "@/components/Students/Adults/Assignement";
import SingleTraining from "@/components/Students/Adults/SingleTraining";
import NewSingleTraining from "@/components/Students/Adults/NewSingleTraining";
import NewEnrolled from "@/components/Students/Adults/NewEnrolled";
import KidStudentGeneral from "@/components/Students/Kids/KidStudentGeneral";
import KidTrainings from "@/components/Students/Kids/KidTrainings";
import KidAssignement from "@/components/Students/Kids/KidAssignment";
import KidSingleTraining from "@/components/Students/Kids/KidSingleTraining";
import KidNewSingle from "@/components/Students/Kids/KidNewSingle";
import BoxBot from "@/components/Students/Kids/BoxBot";
import OnlineClass from "@/components/Students/Kids/OnlineClass";

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
      {/* <EditTrainee/> */}
      {/*<AddTraining/>*/}
      {/*<AdultStudentGeneral />*/}
      {/*<MyTrainings />*/}
      {/*<Assignement />*/}
      {/*<SingleTraining />*/}
      {/*<NewSingleTraining />*/}
      {/*<NewEnrolled />*/}
      {/*<KidStudentGeneral />*/}
      {/*<KidTrainings />*/}
      {/*<KidAssignement />*/}
      {/*<KidSingleTraining />*/}
      {/*<KidNewSingle />*/}
      {/*<BoxBot />*/}
      <OnlineClass />
    </main>
  );
}
