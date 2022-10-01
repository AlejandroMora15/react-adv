import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-style.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Clank',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductCard.Image className='custom-image'/>
          <ProductCard.Title/>
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard className='bg-dark' product={product}>
          <ProductImage className='custom-image'/>
          <ProductTitle className='text-white'/>
          <ProductButtons className='custom-buttons'/>
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: '#70D1F8' }}>
          <ProductImage style={{ boxShadow: '10px 10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle style={{ fontWeight: 'bold' }}/>
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }}/>
        </ProductCard>
      </div>
    </div>
  )
}
