
import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import DeleteButton from '../_components/DeleteButton'
import IssueButton from '../_components/IssueButton'
import IssueDetails from '../_components/IssueDetails'
import StatusUpdate from '../_components/statusUpdate'
import NavBar from '@/app/component/NavBar'


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
    <>
    <Grid columns="2" gap="3" rows="repeat(2, 64px)" width="auto" className=' px-10 py-10'>
        <Box >
        <IssueDetails issue={issue}/>
        </Box>
        <Box >
            <Flex direction="column" gap="2" width="200px">
            <IssueButton issueId={issue.id}/>
            <DeleteButton issueId={issue.id}/>
            <StatusUpdate issueId = {issue.id}/>
            </Flex>
        </Box>
    </Grid>
    </>
   
  )
}

export default Issuedetailpage