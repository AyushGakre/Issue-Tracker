"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



const StatusUpdate = ({issueId}:{issueId: number}) => {
    const router = useRouter()
    const[status, setStatus] = useState('');
    const handleChange = async (e: any) => {
    const newstatus = e.target.value;
    setStatus(newstatus);
    await axios.put(`/api/issues/${issueId}`,{
    status: newstatus
    })
    router.refresh()
    if(newstatus == "CLOSED"){
        router.push('/issues')
    }
    }
return (
    <>
    <form className="max-w-xl mx-auto">
    <select  value={status} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Update status</option>
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="CLOSED">Close</option>
    </select>
    </form>
    </>
)
}

export default StatusUpdate
