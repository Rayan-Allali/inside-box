import React, { MouseEventHandler, useState } from 'react'

type Props = {
    title: string;
    leftText: string;
    rightText: string;
    actionHandler: MouseEventHandler;
    cancelHandler: MouseEventHandler;
}

const ActionWithPasswordWindow = ({title, leftText, rightText,  actionHandler, cancelHandler}:Props) => {

    const [ viewPassword, setViewPassword ] = useState(false);

    return (
        <div className="w-[30rem] h-96 flex flex-col justify-around items-center bg-white rounded-md">

            <div className="header"> {title} </div>
            
            <label htmlFor="">
                Password <span className='text-red-primary mr-12' >*</span>
                <input type={viewPassword ? 'text' : 'password'} name='confirmationPassword' className='p-2 m-2 border-2 border-gray-400 rounded-md'/>
            </label>

            <div className="w-[60%] flex justify-between">
                <button
                type='button'
                className="w-fit px-8 py-4 m-2 bg-red-primary hover:bg-red-700  text-white rounded-md"
                onClick={actionHandler}
                >
                    {leftText}
                </button>
                <button
                type='button'
                className="w-fit px-4 m-2 text-red-primary"
                onClick={cancelHandler}
                >
                    {rightText}
                </button>
            </div>
        </div>
    )
}

export default ActionWithPasswordWindow