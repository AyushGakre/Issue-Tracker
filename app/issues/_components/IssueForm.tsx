"use client";
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { IconInfoCircle } from '@tabler/icons-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IssueSchema } from '@/validationSchema';
import { Issue } from '@prisma/client';


interface IssueformData{
    title: string;
    description: string;
}


const IssueForm = ({issue}: {issue?: Issue}) => {
    const router = useRouter();
    const {register,control,handleSubmit, formState: {errors}}= useForm<IssueformData>({
      resolver: zodResolver(IssueSchema)
    })
    const [error ,setError] = useState('')
    

  return (
    <div className=' px-12 py-8 max-w-2xl'>
      { error &&
        <Callout.Root color='red'>
          <Callout.Icon><IconInfoCircle/></Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      }
    <form className='space-y-3' onSubmit={
        handleSubmit(async(data)=> {
          try{
            if(issue)
              axios.patch('/api/issues/' + issue.id, data)
            else
            await axios.post('/api/issues',data);
            router.push('/issues')
          }catch(error){
            setError('Unexpected Error Occurs');
          }
            })}>
        <TextField.Root defaultValue={issue?.title} placeholder='Title' {...register('title')}>
        </TextField.Root>
        {errors.title && <Text color='red'>Title should not be Empty</Text>}
        <Controller
        name='description'
        control={control}
        defaultValue={issue?.description}
        render={({ field })=> <SimpleMDE placeholder='Description' {...field}/>}
        />
        <Button>{issue ? 'Update Issue': 'Submit new Issue'}</Button>
    </form>
    </div>
  )
}

export default IssueForm