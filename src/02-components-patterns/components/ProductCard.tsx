import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { createContext, CSSProperties } from 'react'
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface ProductCardProps {
  product: Product
  /* children?: ReactElement | ReactElement[] */
  children: (args: ProductCardHandlers) => JSX.Element
  className?: string
  style?: CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
  initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ product, onChange, value, initialValues })
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {
        children({
          count: counter,
          isMaxCountReached,
          increaseBy,
          maxCount,
          reset,
          product
        })}
      </div>
    </Provider>
  )
}
