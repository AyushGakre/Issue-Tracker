"use client"
import { SessionProvider } from 'next-auth/react'
import React, { PropsWithChildren } from 'react'

const Authentication = ({children}: PropsWithChildren) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Authentication