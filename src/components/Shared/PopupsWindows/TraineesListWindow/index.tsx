import React, { MouseEventHandler, useEffect, useState, useRef } from 'react'

// Images
import ProfileLogo from '@/assets/images/shared/Profillogo.svg'
import TraineeRow from './TraineeRow';

type Props = {
    traineesList: Trainee[];
    setTraineesList: React.Dispatch<React.SetStateAction<Trainee[]>>;
    closeHandler: MouseEventHandler;
}

type Trainee = {
    image: any;
    name: string;
}

const TraineesListWindow = ({traineesList, setTraineesList, closeHandler}:Props) => {
    const searchInputRef = useRef<HTMLInputElement>();
    const handleDelete = (name:string) => {
        setTraineesList(prev => prev.filter(trainee => trainee.name !== name))
    }

    const addTrainee = () => {
        setTraineesList(prev => [...prev, {image: ProfileLogo, name: searchInputRef.current.value} ])
    }

    return (
        <div className="w-[42rem] h-[40rem] flex flex-col justify-around items-center border bg-white rounded-md">

            <div className="header"> List of Trainees </div>

            <div className='h-[50%] auto-rows-min w-[90%] grid grid-cols-2 items-start gap-x-4 gap-y-4 overflow-y-auto'>
                {traineesList.map(trainee => <TraineeRow image={trainee.image} name={trainee.name} handleDelete={(e) => handleDelete(trainee.name)} />)}
            </div>

            <label htmlFor="">
                <input ref={searchInputRef} type="text" placeholder='Search for a trainee... ' className='p-2 m-2 border-2 border-gray-400 rounded-md' />
            </label>

            <div className="w-[60%] flex justify-between">
                <button
                type='button'
                className="w-fit px-8 py-4 m-2 bg-green-primary hover:bg-green-400  text-white rounded-md"
                onClick={addTrainee}
                >
                    Add
                </button>
                <button
                type='button'
                className="w-fit px-4 m-2 text-black"
                onClick={closeHandler}
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default TraineesListWindow