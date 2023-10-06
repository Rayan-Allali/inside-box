import React from 'react'

type HeaderProps = {
    title: string
    subtitle: string
}

const Header = ({title, subtitle}:HeaderProps) => {
    title = "Hello"
    subtitle = "World"

    return (
        <>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </>
    )
}

export default Header