'use client'
import '@/app/globals.css'
import { Inter } from 'next/font/google'
import SideNavbar from '@/components/Shared/Sidenavbar'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isBlured, setIsBlured] = useState(false);
  const [isMounted, setMounted] = useState(false);
  useEffect( ()=>{
    setMounted(true)
  })
  if(isMounted){
  return (
    <div>
      <body className={inter.className}>
            <div className='w-screen h-screen flex'>
                <SideNavbar Route='My Trainings' User='Teacher' setIsBlured={setIsBlured}/> 
                <main className={`w-5/6 h-full bg-white ${isBlured ? 'blur-[5px]' : ''}`}>{children}</main>
            </div>
        </body>
    </div>
  )}
  return null
}
