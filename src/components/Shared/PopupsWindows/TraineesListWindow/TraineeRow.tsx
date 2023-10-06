import Image from 'next/image';
import React, { MouseEventHandler } from 'react'

// Images
import DeleteIconRed from '@/assets/images/shared/delete-red.svg'

type Props = {
    image: any;
    name: string;
}

const TraineeRow = ({image, name}:Props) => {

    const handleDelete:MouseEventHandler = (e) => {
        
    }

    return (
        <div className='h-12 w-full px-4 flex justify-between items-center'>
            <div className='flex items-center gap-6'>
                <Image src={image} alt='profile image' width={0} height={0} sizes='100vw' className='w-12 h-12'/>
                <p>{name}</p>
            </div>
            <Image src={DeleteIconRed} alt='delete icon red version' width={0} height={0} sizes='100vw' onClick={handleDelete} className='w-6 h-6 cursor-pointer'/>
        </div>
    )
}

export default TraineeRow