
import { Select } from '@radix-ui/themes'
import React from 'react'
import { Status } from '@prisma/client'



const IssueStatusfilter = () => {
    const statues: {label: string, value?: Status}[] = [
        {label: 'All'},
        {label: 'Open', value: 'OPEN'},
        {label: 'In Progress', value: 'IN_PROGRESS'},
        {label: 'Closed', value: 'CLOSED'},
    ]
  return (
    <Select.Root>
        <Select.Trigger placeholder='Filter by status ....'>
            <Select.Content>
            {statues.map(status => (
                <Select.Item key={status.value} value={status.value || ''} >
                    {status.label}
                </Select.Item>
            ))}
            </Select.Content>
        </Select.Trigger>
    </Select.Root>
  )
}

export default IssueStatusfilter