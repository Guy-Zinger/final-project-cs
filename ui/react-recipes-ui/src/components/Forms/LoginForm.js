import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
// import FormLable from '@mui/material/core/FormLable'
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
    }
})

// const [usernameError, setUsernameError] = useState(false)
// const [passwordError, setPasswordError] = useState(false)

const handleSubmit = (e)=> {
    e.prevetDefault();
}

const LoginForm = () => {
    const classes = useStyles()

  return (
    <FormControl className='login-form-control'>       
        <Typography className={classes.field} component="h2" variant="h6" >Welcome to recipes</Typography>
        <form noValidate
        className='login-form' onSubmit={handleSubmit}>
            <div className='username-div'>
                <TextField required id="outlined-basic" label="Username" name="username"/>
            </div>
            <div className='password-div'>
                <TextField className={classes.field} required id="outlined-basic" label="Password" name="password"/>
            </div>
            <Button className={classes.btn} type='submit' variant="contained">
                Login
            </Button>
            <div>
            <Button className={classes.btn} color="secondary" variant="contained">
                signup
            </Button>
            </div>
        </form>
    </FormControl>
  )
}

export default LoginForm