import React, { MouseEventHandler, useEffect, useState } from 'react'

// Images
import ProfileLogo from '@/assets/images/shared/Profillogo.svg'
import TraineeRow from './TraineeRow';

// Mock data
import traineesList from './trainees.js'

type Props = {
    actionHandler: MouseEventHandler;
    cancelHandler: MouseEventHandler;
}

const TraineesListWindow = ({actionHandler, cancelHandler}:Props) => {
    const [ trainess, setTrainess ] = useState<{image:any,name:string}[]>([]) 

    useEffect(() => {
        setTrainess(traineesList);
    })

    return (
        <div className="w-[42rem] h-[40rem] flex flex-col justify-around items-center border bg-white rounded-md">

            <div className="header"> List of Trainees </div>

            <div className='h-[50%] auto-rows-min w-[90%] grid grid-cols-2 items-start gap-x-4 gap-y-4 overflow-y-auto'>
                {traineesList.map(trainee => <TraineeRow image={trainee.image} name={trainee.name} />)}
            </div>

            <label htmlFor="">
                <input type="text" placeholder='Search for a trainee... ' className='p-2 m-2 border-2 border-gray-400 rounded-md' />
            </label>

            <div className="w-[60%] flex justify-between">
                <button
                type='button'
                className="w-fit px-8 py-4 m-2 bg-green-primary hover:bg-green-400  text-white rounded-md"
                onClick={actionHandler}
                >
                    Add
                </button>
                <button
                type='button'
                className="w-fit px-4 m-2 text-black"
                onClick={cancelHandler}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default TraineesListWindow