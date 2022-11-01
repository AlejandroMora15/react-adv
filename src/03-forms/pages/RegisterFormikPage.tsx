import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
}

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={initialState}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
      { ({ handleReset }) =>
        <Form>
          <MyTextInput name='name' label='Nombre' />
          <MyTextInput name='email' label='Email' />
          <MyTextInput name='password1' label='Password' />
          <MyTextInput name='password2' label='Repeat Password' />
          <button type='submit'>Create</button>
          <button type='button' onClick={handleReset}>Reset form</button>
        </Form>
      }
      </Formik>
    </div>
  )
}

const validationSchema = yup.object({
  name: yup.string().min(2, 'El nombre debe tener mínimo 3 caracteres').max(15, 'Debe tener 15 caracteres o menos').required('Campo requerido'),
  email: yup.string().email('Formato email inválido').required('Campo requerido'),
  password1: yup.string().min(6, 'Mínimo 6 letras').required('Campo requerido'),
  password2: yup.string().oneOf([yup.ref('password1')], 'Contraseña diferente').required('Campo requerido')
})
