'use client'
import React, { MouseEventHandler, ReactNode, useRef } from "react";
import Image from "next/image";
import Edit from "@/assets/images/shared/edit.svg";
import deleteIcon from "@/assets/images/shared/delete.svg";
import Popup from "reactjs-popup";
import ActionWithPasswordWindow from "../Shared/PopupsWindows/ActionWithPasswordWindow";
import { useRouter } from "next/navigation";

interface ICardContainerProps {
  title: string;
  desc: string;
  img: any;
  handleDelete: Function;
  setIsBlured:Function;
}
const CardContainer = (props: ICardContainerProps) => {
  const { title, desc, img, handleDelete, setIsBlured } = props;

const router=useRouter()
  
  return (

    <div className="border border-[#896DDB] rounded-[19px] h-72 w-96  ">

      <Image
        className="rounded-tl-[19px] rounded-tr-[19px] w-full  "
        alt="Course Img"
        src={img}
      />
      <div className="p-4 py-3 h-40 flex-grow bg-white flex flex-col justify-between ">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-[#000000] font-bold  "> {title} </h1>
          <p className="text-xs text-[#00000080] "> {desc} </p>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button type="button" title="edit" className="border border-[#1C263080] p-3 py-2 rounded-md "
          onClick={()=>router.push('/Trainings/5/EditTraining')}
          >
            <Image alt="edit" src={Edit} />
          </button>
          
          <Popup
            trigger={
              <button type="button" title="delete" className="border border-[#1C263080] p-3 py-2 rounded-md ">
                <Image alt="delete" src={deleteIcon} />
              </button>
            }
            modal
            onOpen={() => setIsBlured(true)}
            onClose={() => setIsBlured(false)}
            nested
          >
            {(close: any) => {
              return (
                <ActionWithPasswordWindow title="Confirm the operation" leftText="Delete" rightText="Cancel" actionHandler={() => {handleDelete(title); close()} } cancelHandler={close} />
              )}
            }
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
