import { useFormik } from 'formik'
import * as yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => {
      console.log(values)
    },
    validationSchema: yup.object({
      firstName: yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Campo requerido'),
      lastName: yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Campo requerido'),
      email: yup.string().email('Formato email inválido').required('Campo requerido')
    })
  })

  return (
    <div>
      <h1>Formik Yup</h1>
      <hr />
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='firstName'>First name</label>
        <input type='text' {...getFieldProps('firstName')} />
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor='lastName'>Last name</label>
        <input type='text' {...getFieldProps('lastName')}/>
        { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input type='email' {...getFieldProps('email')}/>
        { touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
