import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { MyFastSelect, MyFastTextInput } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: { [prop: string]: any } = {}
const validationsFields: { [prop: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = yup.string()
  for (const rule of input.validations) {
    if (rule.type === 'required') schema = schema.required('Este campo es requerido')
    if (rule.type === 'minLength') schema = schema.min((rule as any).value || 1, `Mínimo de ${(rule as any).value || 1} caracteres`)
    if (rule.type === 'email') schema = schema.email('Fomáto de email inválido')
  }
  validationsFields[input.name] = schema
}

const validationSchema = yup.object({ ...validationsFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
      {() =>
        <Form noValidate>
          { formJson.map(({ type, name, label, placeholder, options }) => {
            if (type === 'input' || type === 'password' || type === 'email') {
              return (
                <MyFastTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              )
            } else if (type === 'select') {
              return (
                <MyFastSelect key={name} name={name} label={label}>
                  <option value=''>Select an option</option>
                  { options?.map(({ id, label }) =>
                    <option key={id} value={id}>{ label }</option>
                  )}
                </MyFastSelect>
              )
            }
            return <h2 key={name}>Type: { type } no es soportado </h2>
          })}
          <button type='submit'>Submit</button>
        </Form>
      }
      </Formik>
    </div>
  )
}
