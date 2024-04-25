'use client'
import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa";
import {usePathname} from 'next/navigation'
import classNames from 'classnames';
import { useSession } from "next-auth/react"
import { Avatar, Box, DropdownMenu, Flex, Text } from '@radix-ui/themes';
const NavBar = () => {
  const currentPath = usePathname()
const{status, data:session}=useSession()
    const links = [
        {label: 'DashBoard' , href:'/'},
        {label: 'Issues' , href:'/issues'}
    ]
  return (
    <nav className=' flex space-x-6 px-6 h-14 items-center justify-between bg-gray-100'>
        <Link href="/" className=' text-2xl'><FaBug/></Link>
        <Flex>
        <ul className='flex  space-x-6'>
            {links.map(link => 
            <li key={link.href}>
                <Link  
                className={classNames({
                  'text-zinc-900': link.href === currentPath,
                  'text-zinc-500': link.href !== currentPath,
                  'hover:text-zinc-900 transition-colors': true
                })
                }
                href={link.href}>{status === 'authenticated' &&link.label}</Link></li>
                )}
        </ul>
        </Flex>
        <Flex >
        <Box>
        {status === 'authenticated' && (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar src={session.user?.image!} fallback="?" size="2" radius='full'/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>
                <Text  className=' text-sm font-medium te'>
                {session.user?.email}
                </Text>
              </DropdownMenu.Label>
            <button className=' bg-slate-200 text-red-600 text-base'>
                <Link href="/api/auth/signout">Log out</Link>
                </button>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        )
        // <Link href="/api/auth/signout">Log out</Link>
        }
        {status === 'unauthenticated' && <Link href="/api/auth/signin">Log in</Link>}
        </Box>
        </Flex>
    </nav>
  )
} 

export default NavBar