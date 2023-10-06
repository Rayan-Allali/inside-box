import React from 'react'

type HeaderProps = {
    title: string
    subtitle: string
    withNotification?: boolean
    withXP?: boolean
}

const Header = ({title, subtitle, withNotification, withXP}:HeaderProps) => {

    return (
        <>
            <div className='text-primary-black font-gilroy'>
                <h1 className='text-[32px] font-extrabold leading-normal'>{title}</h1>
                <h2 className='text-[18px] font-extrabold leading-normal'>{subtitle}</h2>
            </div>
        </>
    )
}

export default Header