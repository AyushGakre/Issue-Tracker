
import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import DeleteButton from '../_components/DeleteButton'
import IssueButton from '../_components/IssueButton'
import IssueDetails from '../_components/IssueDetails'
import StatusUpdate from '../_components/statusUpdate'


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
    <Grid className=' px-12 py-12 ' columns="4">
        <Box >
        <IssueDetails issue={issue}/>
        </Box>
        <Box >
            <Flex direction="column" gap="2">
            <IssueButton issueId={issue.id}/>
            <DeleteButton issueId={issue.id}/>
            <StatusUpdate issueId = {issue.id}/>
            </Flex>
        </Box>
    </Grid>
   
  )
}

export default Issuedetailpage