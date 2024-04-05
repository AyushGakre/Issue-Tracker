import StatusBadge from '@/app/component/StatusBadge'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import Markdown from 'react-markdown'
import Link from 'next/link'
import { FaPencilAlt, FaPencilRuler } from 'react-icons/fa'
import { IconPencilCheck } from '@tabler/icons-react'
import IssueButton from './IssueButton'
import IssueDetails from './IssueDetails'

interface Props {
    params: {id: string}
}

const Issuedetailpage = async({params} : Props) => {
    const issue = await prisma.issue.findUnique({
        where : {id : parseInt(params.id)}
    })
    if(!issue){
        return notFound();
    }
  return (
    <Grid className=' px-12 py-12' columns="2">
        <Box >
        <IssueDetails issue={issue}/>
        </Box>
        <Box >
            <IssueButton issueId={issue.id}/>
        </Box>
    </Grid>
   
  )
}

export default Issuedetailpage