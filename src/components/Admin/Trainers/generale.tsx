import annoceIcon from '@/assets/images/shared/annoceIcon.svg'
export const TeacherGeneral = ()=>{
    return(
        <div className="p-[40px] flex items-center">
            <div className="flex flex-col gap-[5px] ">
                <h1 className="text-3xl">Welcome to Your Main Page</h1>
                <p className="text-xl">You can control accounts of trainers , trainees , and trainings  ! </p>
            </div>
        <button style={{fontSize:"22px",color:'#38CFBA',outline:"none",border:"1px solid #38CFBA" , padding:"20px 10px",display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"white",minWidth:"250px"
,borderRadius: "6.16px"
}} >
           <img src={annoceIcon.src} alt="" /> Add Announce
        </button>
        </div>
    )
}