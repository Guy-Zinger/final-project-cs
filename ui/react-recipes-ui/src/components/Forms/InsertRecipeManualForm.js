import { Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';
import React, { useState } from 'react'

const useStyles = makeStyles({
    field:{
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    btn:{
        marginTop: 5,
        marginBottom: 5,
        width: 210
    }
})

const InsertRecipeManualForm = () => {
    const classes = useStyles()

    return (
      <div className='insert-reciped-manual-form-container'>
          <Typography className={classes.field} component="h2" variant="h6" >Insert recipe</Typography>
          <form noValidate
          className='insert-reciped-manual-form' onSubmit={handleSubmit}>
              <div className='title-div'>
                  <TextField required id="outlined-basic" label="Title" fullWidth/>
              </div>
              <div className='title-div'>
                  <TextField required id="outlined-basic" label="Title" fullWidth/>
              </div>
              <div className='title-div'>
                  <TextField required id="outlined-basic" label="Title" fullWidth/>
              </div>
              <div className='title-div'>
                  <TextField required id="outlined-basic" label="Title" fullWidth/>
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
         
  
      </div>
    )
  }

export default InsertRecipeManualForm