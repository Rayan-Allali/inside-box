import React, { MouseEventHandler } from 'react'

type Props = {
    actionHandler: MouseEventHandler;
    cancelHandler: MouseEventHandler;
}

const LogOutWindow = ({actionHandler, cancelHandler}:Props) => {
    return (
        <div className="w-[30rem] h-52 flex flex-col justify-around items-center bg-white rounded-md">

            <div className="text-3xl"> Are you sure ?</div>

            <div className="w-[60%] flex justify-between">
                <button
                type='button'
                className="w-fit px-8 py-4 m-2 bg-red-primary hover:bg-red-700  text-white rounded-md"
                onClick={actionHandler}
                >
                    Logout
                </button>
                <button
                type='button'
                className="w-fit px-4 m-2 text-red-primary"
                onClick={cancelHandler}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default LogOutWindow