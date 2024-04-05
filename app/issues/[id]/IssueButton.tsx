import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

const IssueButton = ({issueId}: {issueId: number}) => {
  return (
    <Button>
    <FaPencilAlt/>
    <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  )
}

export default IssueButton