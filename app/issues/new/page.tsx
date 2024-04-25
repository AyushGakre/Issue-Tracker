
import React from 'react'
import IssueForm from '../_components/IssueForm'
import { Flex } from '@radix-ui/themes'
import delay from 'delay'
import IssueStatusfilter from '../_components/issueStatusfilter'

const page = async() => {
  // await delay(4000)
  return (
    <>
    <Flex justify="center">
    <IssueForm/>
    </Flex>
    </>
  )
}

export default page