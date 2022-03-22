import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import { makeStyles } from '@mui/styles';
import { border, borderColor } from '@mui/system';
// import RecipeCardSmall from '..components/Recipes'
// const useStyles = makeStyles({
//     form:{
//         shape: borderColor="primary"
//     }
// })


const Login = () => {
    // const classes = useStyles()
  return (
    <div className='login-page'>
        <LoginForm >
        </LoginForm>

        {/* <RecipeCardSmall>

        </RecipeCardSmall> */}


          
    </div>
  )
}

export default Login