import React from "react";
import Image from "next/image";
import Edit from "@/assets/images/shared/edit.svg"
import deleteIcon from "@/assets/images/shared/delete.svg"
interface ICardContainerProps {
  title: string;
  desc: string;
  img: any;
}
const CardContainer = (props: ICardContainerProps) => {
  const { title, desc, img } = props;
  return (
    <div className="border border-[#896DDB] rounded-[20px] h-72 w-96 ">
      <Image
        className="rounded-tl-[19px] rounded-tr-[19px] w-full  "
        alt="Course Img"
        src={img}
      />
      <div className="p-4 py-3 h-40 flex-grow bg-white rounded-[19px] flex flex-col justify-between ">
        <div className="flex flex-col gap-2 items-start">
        <h1 className="text-[#000000] font-bold  "> {title} </h1>
        <p className="text-xs text-[#00000080] "> {desc} </p>
        </div>
        <div className="flex items-center justify-end gap-3">
        <button className="border border-[#1C263080] p-3 py-2 rounded-md ">
          <Image alt="edit" src={Edit} />
        </button>
        <button className="border border-[#1C263080] p-3 py-2 rounded-md ">
          <Image alt="delete" src={deleteIcon} />
        </button>
      </div>
      </div>

    </div>
  );
};

export default CardContainer;
