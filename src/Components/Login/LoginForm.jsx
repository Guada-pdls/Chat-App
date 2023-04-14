import { Button, Input } from '@mui/joy';
import React from 'react'
import './LoginForm.css'

const LoginForm = () => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='container-login'>
      <div>
        <h2>Login</h2>
      </div>

      <div className='container-form-login'>
        <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="">Email</label>
          <Input
            color="neutral"
            disabled={false}
            placeholder="Email"
            variant="outlined"
          />
          <label htmlFor="">Password</label>
          <Input
            color="neutral"
            disabled={false}
            placeholder="Password"
            variant="outlined"
          />

          <Button
            color="neutral"
            onClick={()=> console.log('ola')}
            size="md"
            variant="solid"
          >Ingresar</Button>
        </form>
      </div>
    </section>
  )
}

export default LoginForm