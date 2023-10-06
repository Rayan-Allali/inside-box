"use client"
import { useParams } from "next/navigation"

const UserHome = () => {
    const { username } = useParams()

    return (
        <div>{username}</div>
    )
}

export default UserHome