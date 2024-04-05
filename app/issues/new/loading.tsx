import { TextField, Button } from '@radix-ui/themes'
import { register } from 'module'
import React from 'react'
import { Controller } from 'react-hook-form'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const loading = () => {
  return (
    <div> 

<h2>Loading...........</h2>
    </div>
  )
}

export default loading