"use client"
import AddTrainer from "@/components/Admin/AddTrainer"
import EditTrainer from "@/components/Admin/EditTrainer"
import { useParams } from "next/navigation"

const UserHome = () => {
    const { username } = useParams()

    return (
        <>
            {/* <AddTrainer/> */}
            {/* <EditTrainer/> */}
        </>
    )
}

export default UserHome