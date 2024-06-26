import { Table } from '@radix-ui/themes'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
    const issues = [1,2,3,4,5,6,7,8,9]
  return (
    <div className=' px-20 py-8'>
        <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell><Skeleton /></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell' ><Skeleton /></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell'><Skeleton /></Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className=' hidden md:table-cell'><Skeleton /></Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue =>(
            <Table.Row key={issue}>
              <Table.Cell><Skeleton />
              <div className=' block md:hidden'><Skeleton /></div>
              </Table.Cell>
              <Table.Cell className=' hidden md:table-cell'><Skeleton /></Table.Cell>
              <Table.Cell className=' hidden md:table-cell'><Skeleton /></Table.Cell>
              <Table.Cell className=' hidden md:table-cell'><Skeleton /></Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default loading