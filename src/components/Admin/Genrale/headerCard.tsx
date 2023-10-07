import Image from "next/image"

interface IAdminHeaderCardAProps{
icone:any,
nbr:number,
name:string
}
export const AdminHeaderCard=(props:IAdminHeaderCardAProps)=>{
    const {icone,nbr,name}=props
    return(
        <div className="bg-[#38CFBA1A] flex flex-col gap-5 items-center justify-center rounded-md w-[350px] h-[272px] ">
            <div className="text-xl text-white w-24 h-24 rounded-full bg-[#38CFBA] p-2 flex items-center justify-center">
            <Image alt="key" src={icone}/>
            </div>
            <h1 className="text-[#38CFBA] text-2xl font-bold text-center">
                Total {name}
            </h1>
            <h1 className="text-[#38CFBA] text-2xl font-bold text-center">
               {nbr}
            </h1>
        </div>
    )
}