"use client"
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { toast } from 'sonner'

const IssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button onClick={()=>{
      toast(<div className=' font-sans font-medium text-base text-blue-500'> Edit the Content of Issue</div>)
    }}>
    <FaPencilAlt/>
    <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  )
}

export default IssueButton