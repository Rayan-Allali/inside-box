import React from 'react'
import Doc from "@/assets/images/shared/Doc.svg"
import Image from 'next/image';
interface ICardContainerProps {
    title: string;
    desc: string;
    Deadline:string,
    Chapter: string,
    Status: string
  }

const AssignmentContainer = (props: ICardContainerProps) => {
    const { title, desc, Deadline, Chapter, Status } = props;
  return (
    <div>
        <div className='border-t-2 border-r-2 border-l-2 border-[#896DDB] rounded-t-[8px] flex flex-col items-start px-[10%] py-[10%] gap-[32px]'>
            <div className='flex flex-col gap-[16px]'>
                <h2 className='text-[24px] text-[#002845] font-medium'>
                    {title}
                </h2>
                <p className='text-[#8D8D8D]'>
                    {desc}
                </p>
            </div>
            <Image alt="Doc" src={Doc}/>
            <div className='flex flex-col items-start gap-[8px]'>
                <div className='flex gap-[8px]'>
                    <p className='text-[#1c1c1c] font-medium'>Deadline:</p>
                    <p className='text-[#38CFBA]'>{Deadline}</p>
                </div>
                <div className='flex gap-[8px]'>
                    <p className='text-[#1c1c1c] font-medium'>Chapter:</p>
                    <p className='text-[#38CFBA]'>{Chapter}</p>
                </div>
            </div>
        </div>
    {
        (Status=="Submited") ? <button className='border-2 rounded-b-[8px] border-[#38CFBA] w-[100%] text-[#38CFBA] font-medium py-[5%]'>
            Submited
        </button> : <button className='border-2 rounded-b-[8px] border-[#38CFBA] bg-[#38CFBA] w-[100%] text-white font-medium py-[5%]'>Submit Assignment</button>
    }
    </div>
  )
}

export default AssignmentContainer