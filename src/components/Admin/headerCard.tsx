import { BiKey } from "react-icons/bi"

export const AdminHeaderCard=()=>{
    return(
        <div className="bg-[#38CFBA1A] flex flex-col gap-8 items-center justify-center rounded-md p-6">
            <div className="text-[20px] text-white w-24 h-24 rounded-full bg-[#38CFBA] p-2 flex items-center justify-center">
            <BiKey />
            </div>
            <h1 className="text-[#38CFBA] text-2xl font-bold text-center">
                Total Admins
            </h1>
            <h1 className="text-[#38CFBA] text-2xl font-bold text-center">
                5
            </h1>
        </div>
    )
}