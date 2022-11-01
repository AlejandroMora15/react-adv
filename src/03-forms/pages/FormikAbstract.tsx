import { MyFastCheckbox, MyFastSelect, MyFastTextInput } from '../components'
import { Formik, Form } from 'formik'
import '../styles/styles.css'
import * as yup from 'yup'

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
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
          <MyFastTextInput name='firstName' label='First Name'/>
          <MyFastTextInput name='lastName' label='Last Name'/>
          <MyFastTextInput name='email' label='Email' type='email' />
          <MyFastCheckbox name='terms' label='Terms & Conditions' />
          <MyFastSelect name='jobType' label='Job type'>
              <option value=''>Pick something</option>
              <option value='developer'>Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'>IT Senior</option>
              <option value='it-junior'>IT Junior</option>
          </MyFastSelect>
          <button type='submit'>Submit</button>
        </Form>
      )}
      </Formik>
    </div>
  )
}
