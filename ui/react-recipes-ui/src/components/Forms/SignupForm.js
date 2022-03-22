import { Button, FormControl, FormLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'

const useStyles = makeStyles({
  field:{
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
  },
  btn:{
      marginTop: 5,
      marginBottom: 5,
      width: 210
  },
  form:{ padding :20,
    height: '50vh',
    width: 280,
    margin: "20px auto"
    
  }
})


const handleSubmit = (e)=> {
  e.prevetDefault();
}
const SignupForm = () => {

    const classes = useStyles()


  return (
    <FormControl className="form-control-div" > 
    <Paper elevation={10} className ={classes.form}>     
    <Typography className={classes.field} component="h2" variant="h6" >Welcome to recipes</Typography>
    <form noValidate
    className='signup-form' onSubmit={handleSubmit}>
        <Grid container>
        <Grid item className={classes.field}>
            <TextField required id="outlined-basic" label="Username" name="username"/>
        </Grid>
        <Grid item className='password-div'>
            <TextField className={classes.field} required id="outlined-basic" label="Password" name="password" type="password"/>
        </Grid>
        <Grid item className='email-div'>
            <TextField className={classes.field} required id="outlined-basic" label="Email" name="password"/>
        </Grid>
        <Grid item>
        <Button className={classes.btn} color="secondary" variant="contained">
            Sign Up
        </Button>
        </Grid>
      </Grid>
    </form>
    </Paper> 
</FormControl>
  )
}

export default SignupForm