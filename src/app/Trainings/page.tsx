import arrowDown from "@/assets/images/shared/arrowDown.svg";
import Image from "next/image";
import researchIcon from "@/assets/images/shared/researchIcon.svg";
import deletIcon from "@/assets/images/shared/delete.svg";
import editIcon from "@/assets/images/shared/edit.svg";
import Header from "@/components/Shared/Header";
import Trainings from "@/components/Admin/Trainings";
export default function Home() {
  return (
    <main className="p-10 py-14">
      <Trainings />
    </main>
  );
}
