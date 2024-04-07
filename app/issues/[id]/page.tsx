import prisma from '@/prisma/client'
import { Box, Flex, Grid } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import DeleteButton from './DeleteButton'
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
    <Grid className=' px-12 py-12' columns="3">
        <Box >
        <IssueDetails issue={issue}/>
        </Box>
        <Box >
            <Flex direction="column" gap="2">
            <IssueButton issueId={issue.id}/>
            <DeleteButton issueId={issue.id}/>
            
            </Flex>
        </Box>
    </Grid>
   
  )
}

export default Issuedetailpage