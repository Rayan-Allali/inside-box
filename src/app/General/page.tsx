import Header from "@/components/Shared/Header";
import Key from "@/assets/images/Dashboard/bx_key.svg";
import trainer from "@/assets/images/SideNavbar/trainers.svg";
import frame from "@/assets/images/SideNavbar/frame.svg";
import { AdminHeaderCard } from "@/components/Admin/Genrale/headerCard";

export default function Home() {
  return (
    <div className="p-[40px] max-h-screen overflow-y-scroll ">
      <Header
        title={"Welcome to the dashboard "}
        subtitle={
          "You can control accounts of trainers , trainees , and trainings  ! "
        }
      />
      <div className="flex gap-10 items-center mt-12 ">
        <AdminHeaderCard icone={Key} name="Trainnigs" nbr={18} />
        <AdminHeaderCard icone={Key} name="Student" nbr={50} />
        <AdminHeaderCard icone={Key} name="Groupes" nbr={5} />
        <AdminHeaderCard icone={Key} name="Trainer" nbr={15} />
      </div>
      <div className="flex items-center mt-8 justify-between text-[#38CFBA] ">
        <div className="flex w-[477px] h-[100px] font-extrabold text-2xl justify-center rounded-lg border border-[#38CFBA] items-center gap-2">
          <p className="">+</p>
          <p className="">Add a Trainnig </p>
        </div>
        <div className="flex w-[477px] h-[100px] font-extrabold text-2xl justify-center rounded-lg border border-[#38CFBA] items-center gap-2">
          <p className="">+</p>
          <p className="">Add a Trainer </p>
        </div>
        <div className="flex w-[477px] h-[100px] font-extrabold text-2xl justify-center rounded-lg border border-[#38CFBA] items-center gap-2">
          <p className="">+</p>
          <p className="">Add a Trainee </p>
        </div>
      </div>
      <div className="mt-8 w-full h-[790px] border border-[#38CFBA] ">
  
      </div>
    </div>
  );
}