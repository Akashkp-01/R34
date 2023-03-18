import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

function Signup() {
  return (
    <div>
        <Typography variant='h4' color='primary'>Welcome to <b>facebook</b></Typography>
        <TextField label='First Name' variant='filled'/><br/> 
        <TextField label='Last Name' variant='filled'/><br/>
        <TextField label='Email' type='email' variant='filled'/> <br/>
        <TextField label='Password' type='password' variant='filled'/> <br/><br/>
        <Button variant='contained' color='success'>SIGN UP</Button>   
    </div>
  )
}

export default Signup
