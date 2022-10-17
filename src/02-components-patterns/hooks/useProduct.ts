import { useEffect, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value)

  useEffect(() => {
    setCounter(initialValues?.count || value)
  }, [value])

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount)
    setCounter(newValue)
    onChange && onChange({ count: newValue, product })
  }

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  return {
    counter,
    increaseBy,
    reset,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount
  }
}
