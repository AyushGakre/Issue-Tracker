"use client";
import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import {useForm,Controller} from "react-hook-form"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { IconInfoCircle } from '@tabler/icons-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { IssueSchema } from '@/validationSchema';
import { Issue } from '@prisma/client';
import {  toast } from 'sonner'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



interface IssueformData{
    title: string;
    description: string;
}


const IssueForm = ({issue}: {issue?: Issue}) => {
  const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));
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
            router.refresh()
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
        render={({ field })=> <ReactQuill placeholder='Description' {...field}/>}
        />
        
        
        <Button onClick={
          ()=>{
            toast.promise(promise, {
              loading: 'Loading...',
              success: (data) => {
                return `Issue added Successfully`;
              },
              error: 'Error',
            });
          }
        }>{issue ? 'Update Issue': 'Submit new Issue'}</Button>
        
    </form>
    </div>
  )
}

export default IssueForm