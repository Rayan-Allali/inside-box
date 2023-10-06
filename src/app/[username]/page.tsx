"use client"
import { useParams } from "next/navigation"
import Image from "next/image";

// Components
import AddTrainer from "@/components/Admin/AddTrainer"
import EditTrainer from "@/components/Admin/EditTrainer"
import SignIn from "@/components/SignIn";
import SideNavbar from "@/components/Shared/Sidenavbar";
import Trainings from "@/components/Admin/Trainings";

// Images
import chatgbt from "@/assets/images/courses/chatgpt.svg";

const UserHome = () => {

    return (
        <>
            {/* <AddTrainer/> */}
            {/* <EditTrainer/> */}
            <Trainings/>
        </>
    )
}

export default UserHome;