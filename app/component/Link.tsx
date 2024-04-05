import React from 'react'
import Link from 'next/link'
import {Link as RadixLink} from '@radix-ui/themes'

interface props{
href: string,
children: string
}

const link = ({ href, children}: props) => {
  return (
    <Link href={href} legacyBehavior passHref >
        <RadixLink>{children}</RadixLink>
    </Link>
  )
}

export default link