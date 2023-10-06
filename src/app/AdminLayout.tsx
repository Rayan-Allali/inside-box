import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SideNavbar from '@/components/Shared/SideNavbar'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <div className='w-screen h-screen flex'>
                <SideNavbar Route='General'/>
                <main className='w-5/6 h-full bg-white'>{children}</main>
            </div>
        </body>
    </html>
  )
}