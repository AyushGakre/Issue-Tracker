import prisma from '@/prisma/client'
import { Button, Link, Table } from '@radix-ui/themes'
import React from 'react'
import StatusBadge from '../component/StatusBadge'



const issuenav = async() => {
  const issues = await prisma.issue.findMany()

 
  return (
    
    <div className=' px-24 py-12'>
      {/* <div className=' py-5 px-2'>
      <Button  variant="surface"> <Link href="/issues/new">new Issue </Link> </Button>
      </div> */}
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell' >Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue =>(
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>
                {issue.title}
                </Link>
              <div className=' block md:hidden'><StatusBadge status={issue.status}/></div>
              </Table.Cell>
              <Table.Cell className=' hidden md:table-cell'><StatusBadge status={issue.status}/></Table.Cell>
              <Table.Cell className=' hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>
    </div>

  )
}

export default issuenav