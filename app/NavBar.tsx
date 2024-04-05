'use client'
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import {usePathname} from 'next/navigation'
import classNames from 'classnames';

const NavBar = () => {
  const currentPath = usePathname()
    const links = [
        {label: 'DashBoard' , href:'/'},
        {label: 'Issues' , href:'/issues'}
    ]
  return (
    <nav className=' flex space-x-6 px-6 h-14 items-center bg-gray-100'>
        <Link href="/" className=' text-2xl'><FaBug/></Link>
        <ul className='flex  space-x-6'>
            {links.map(link => 
                <Link key={link.href} 
                className={classNames({
                  'text-zinc-900': link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-900 transition-colors': true
                })
                }
                href={link.href}>{link.label}</Link>
                )}
        </ul>
    </nav>
  )
} 

export default NavBar