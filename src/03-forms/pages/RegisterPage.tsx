import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
}

export const RegisterPage = () => {
  const {
    onChange,
    formData,
    resetForm,
    isValidEmail,
    email, name, password1, password2
  } = useForm(initialState)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name='name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
          {!isValidEmail(email) && <span>Email no válido</span>}
        <input
          type="password"
          placeholder="Password"
          name='password1'
          value={password1}
          onChange={onChange}
          className={`${password1.trim().length <= 0 && 'has-error'}`}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="password"
          name='password2'
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
          className={`${password2.trim().length <= 0 && 'has-error'}`}
        />
          {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm} >Reset form</button>
      </form>
    </div>
  )
}
