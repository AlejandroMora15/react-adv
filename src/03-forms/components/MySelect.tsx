import { useField, ErrorMessage, FastField } from 'formik'

interface Props {
  label?: string,
  name: string,
  [propName: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field] = useField(props)
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export const MyFastSelect = ({ ...props }: Props) => {
  return (
    <FastField name={props}>
      {(({ field }: any) =>
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <select {...field} {...props} />
          <ErrorMessage name={props.name} component='span' />
        </>
      )}
    </FastField>
  )
}
