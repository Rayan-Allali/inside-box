"use client";
import AddTrainer from "@/components/Admin/AddTrainer";
import Image from "next/image";
import SignIn from "@/components/SignIn";
import SideNavbar from "@/components/Shared/Sidenavbar";
import chatgbt from "@/assets/images/courses/chatgpt.svg";
import Trainings from "@/components/Admin/Trainings";
import { useParams } from "next/navigation";

const UserHome = () => {

  return (
    <main>
      <Trainings />
    </main>
  );
};

export default UserHome;
