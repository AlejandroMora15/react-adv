import { useField, ErrorMessage, FastField } from 'formik'

interface Props {
  label?: string,
  name: string,
  [propName: string]: any
}

export const MyCheckbox = ({ ...props }: Props) => {
  const [field] = useField({ ...props, type: 'checkbox' })
  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        { props.label }
      </label>
      <ErrorMessage name={props.name} component='span' />
    </>
  )
}

export const MyFastCheckbox = ({ ...props }: Props) => {
  return (
    <FastField name={props}>
      {(({ field }: any) =>
        <>
          <label>
            <input type='checkbox' {...field} {...props} />
            { props.label }
          </label>
          <ErrorMessage name={props.name} component='span' />
        </>
      )}
    </FastField>
  )
}
