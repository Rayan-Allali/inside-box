'use client'
import '../globals.css'
import { Inter } from 'next/font/google'
import SideNavbar from '@/components/Shared/Sidenavbar'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isBlured, setIsBlured] = useState(false); 
  return (
    <html lang="en">
      <body className={inter.className}>
            <div className='w-screen h-screen flex'>
                <SideNavbar Route='leaderboard' setIsBlured={setIsBlured}/>  
                <main className={`w-5/6 h-full bg-white ${isBlured ? 'blur-[5px]' : ''}`}>{children}</main>
            </div>
        </body>
    </html>
  )
}
