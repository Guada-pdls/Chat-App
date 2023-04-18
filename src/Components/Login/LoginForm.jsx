import { Button, Input } from '@mui/joy'
import React from 'react'
import { useForm } from '../../Hooks/useForm'
import './LoginForm.css'

const initialForm = {
  email: '',
  password: ''
}

const validationsForm = (form) => {
  const errors = {}
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

  !form.password.trim() ? errors.password = "El campo 'Contraseña' es requerido" : !regexName.test(form.name) && (errors.password = "El campo 'Contraseña' sólo acepta letras y espacios en blanco")

  !form.email.trim() ? errors.email = "El campo 'Email' es requerido" : !regexEmail.test(form.email.trim()) && (errors.email = "El campo 'Email' es incorrecto")

  return errors
}

const LoginForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleSubmit,
    handleChange,
    handleBlur

  } = useForm(initialForm, validationsForm)

  return (
    <section className='container-login'>
      <div>
        <h2>Login</h2>
      </div>

      <div className='container-form-login'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <Input
            placeholder='Type your email'
            variant='outlined'
            type='email'
            name='email'
            onBlur={handleBlur}
            onInput={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p>{errors.email}</p>}
          <label htmlFor='password'>Password</label>
          <Input
            placeholder='Password'
            variant='outlined'
            type='text'
            name='password'
            onBlur={handleBlur}
            onInput={handleChange}
            value={form.password}
            required
          />
          {errors.password && <p>{errors.password}</p>}
          <Button
            type='submit'
            color='neutral'
            size='md'
            variant='solid'
          >Ingresar
          </Button>
        </form>
      </div>
    </section>
  )
}

export default LoginForm
