const LoginForm = () => {
  return (
    <form className="login-form">
      <div className="form-control">
      <label>Username:</label>
        <input type='text' placeholder='Enter your user name...'></input>
    </div>
    <div className="form-control">
      <label>Password:</label>
        <input type='text' placeholder='Enter your password...'></input>
    </div>
    <input className='btn btn-block'type='submit' value='Login'></input>
    </form>
  )
}

export default LoginForm