import { useField, ErrorMessage, FastField } from 'formik'

interface Props {
  label?: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  [propName: string]: any
}

export const MyTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type='text' {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export const MyFastTextInput = ({ ...props }: Props) => {
  return (
    <FastField name={props}>
      {(({ field }: any) =>
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input type='text' {...field} {...props} />
          <ErrorMessage name={props.name} component='span' />
        </>
      )}
    </FastField>
  )
}
