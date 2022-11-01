import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup'
import '../styles/styles.css'

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ values => console.log(values)}
        validationSchema={yup.object({
          firstName: yup.string().max(15, 'Must be 15 chars or less').required('Required'),
          lastName: yup.string().max(15, 'Must be 15 chars or less').required('Required'),
          email: yup.string().email('Invalid email format').required('Required'),
          terms: yup.boolean().oneOf([true], 'Must checkon'),
          jobType: yup.string().required('Required')
        })}
      >
      {() => (
        <Form noValidate>
          <label htmlFor='firstName'>First name</label>
          <Field name='firstName' type='text' />
          <ErrorMessage name='firstName' component='span' />

          <label htmlFor='lastName'>Last name</label>
          <Field name='lastName' type='text' />
          <ErrorMessage name='lastName' component='span' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' component='span' />

          <label>
            <Field name='terms' type='checkbox' />
            Terms & Conditions
            </label>
          <ErrorMessage name='terms' component='span' />

          <label htmlFor='jobType'>Job type</label>
          <Field name='jobType' as='select'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Junior</option>
          </Field>
          <ErrorMessage name='jobType' component='span' />

          <button type='submit'>Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}
