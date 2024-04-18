
import React from 'react'
import IssueForm from '../_components/IssueForm'
import { Box, Flex, Grid } from '@radix-ui/themes'
import CardStackDemo from '../_components/Cardstack'
import delay from 'delay'

const page = async() => {
  // await delay(4000)
  return (
    <>
    <Grid columns={{ initial: '1', sm: '2' }}  gap="3" width="auto">
      <Box>
    <IssueForm/>
    </Box>
    <Box>
      <CardStackDemo/>
    </Box>
    </Grid>
    </>
  )
}

export default page