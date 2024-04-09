
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import IssueForm from '../../_components/IssueForm'
import NavBar from '@/app/component/NavBar'

interface Props {
    params: {id: string}
}
const page = async({params}: Props) => {
    const issue =  await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })
    if(!issue){
        return notFound()
    }
  return (
    <>
   
    <IssueForm issue={issue}/>
  
    </>
  )
}

export default page