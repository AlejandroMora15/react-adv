import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import '../styles/custom-style.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        className='bg-dark text-white'
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
      { ({ reset, isMaxCountReached, count, increaseBy }) => (
        <>
          <ProductImage className='custom-image'/>
          <ProductTitle/>
          <ProductButtons/>
          <button onClick={reset}>Reset</button>
          <button onClick={() => increaseBy(-2)}>-2</button>
          { !isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button> }
          <span>{count}</span>
        </>
      )}
      </ProductCard>
    </div>
  )
}
