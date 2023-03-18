import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
       
      <Typography variant='h3' color='primary'><b>Welcome to Facebook😵 </b></Typography>
      <TextField label='email' variant='filled'/><br></br>
      <TextField label='password' type={'password'} variant='filled'/><br></br><br/>
      <Button variant='outlined' color='success'>LOGIN</Button>
    </div>
  )
}

export default Login
