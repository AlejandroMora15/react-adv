import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products'
import { useShoppingCart } from '../hooks/useShoppingCart'
import '../styles/custom-style.css'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        { products.map(product =>
          <ProductCard
            className='bg-dark'
            product={product}
            key={product.id}
            onChange={onProductCountChange}
            value={ shoppingCart[product.id]?.count ?? 0}
          >
            <ProductImage className='custom-image'/>
            <ProductTitle/>
            <ProductButtons/>
          </ProductCard>
        )}
      </div>
      <div className='shopping-card'>
        { Object.values(shoppingCart).map(product =>
          <ProductCard
            key={product.id}
            className='bg-dark'
            product={product}
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image'/>
            <ProductButtons/>
          </ProductCard>
        )}
      </div>
    </div>
  )
}
