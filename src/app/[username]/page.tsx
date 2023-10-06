"use client"
import AddTrainer from "@/components/Admin/AddTrainer"
import { useParams } from "next/navigation"

const UserHome = () => {
    const { username } = useParams()

    return (
        <AddTrainer/>
    )
}

export default UserHome