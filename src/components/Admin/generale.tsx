import Header from "../Shared/Header"
import { AdminHeaderCard } from "./headerCard"

export const GeneraleAdmin = ()=>{

    return(
        <div className="p-[40px]">
        <Header title={"Welcome to the dashboard "} subtitle={"You can control accounts of trainers , trainees , and trainings  ! "} />
        <div className="flex gap-10 items-center ">
        <AdminHeaderCard />
        </div>
        </div>
    )
}