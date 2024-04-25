import prisma from '@/prisma/client'
import { Table } from '@radix-ui/themes'
import Link from "next/link"
import StatusBadge from '../component/StatusBadge'



const issuenav = async() => {
  const issues = await prisma.issue.findMany()
  // await delay(4000)
 
  return (
    <>
  
    <div className=' px-32 py-12' >

      <Table.Root variant='surface' size="2" layout="fixed">
        <Table.Header >
          <Table.Row align="center" >
            <Table.ColumnHeaderCell >Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell' >Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell'>Created</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell'>Last Updated</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body className='  font-medium'>
          {issues.map(issue =>(
            <Table.Row key={issue.id}>
              <Table.Cell >
                <Link href={`/issues/${issue.id}`}>
                {issue.title}
                </Link>
              <div className=' block md:hidden'><StatusBadge status={issue.status}/></div>
              </Table.Cell>
              <Table.Cell className=' hidden md:table-cell'><StatusBadge status={issue.status}/></Table.Cell>
              <Table.Cell className=' hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
              <Table.Cell className=' hidden md:table-cell'>{issue.updatedAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>
    </div>
    </>
  )
}

export const revalidate = 0;

export default issuenav