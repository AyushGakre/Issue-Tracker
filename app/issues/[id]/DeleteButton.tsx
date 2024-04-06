"use client"
import { AlertDialog, Button, Flex } from '@radix-ui/themes'
import axios from 'axios'
import {  notFound, useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

const DeleteButton =  ({issueId}: {issueId: number}) => {
    const router = useRouter()
return (
    <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button color="red">Delete</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content maxWidth="450px">
    <AlertDialog.Title>Delete</AlertDialog.Title>
    <AlertDialog.Description size="2">
      Are you sure? This Issue will no longer be accessible
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="solid" color="red" onClick={async ()=>{
        await axios.delete('/api/issues/' + issueId);
        router.push('/issues');
        router.refresh()
        toast.success('Issue deleted successfully')
        
        }}>
          delete
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>

)
}

export default DeleteButton