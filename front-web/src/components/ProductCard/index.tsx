
import { Product } from '../../pages/products'

import styles from './product-card.module.css'

interface Props {
  product: Product
  onSelectProduct: (product: Product) => void
  isSelected: boolean
}

function formatMoney (value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    minimumFractionDigits: 2
  }).format(value)
}

const ProductCard: React.FC<Props> = ({ product, onSelectProduct, isSelected }) => {
  return (
    <div 
      className={`
        ${styles.wrapper} 
        ${isSelected ? styles['wrapper--selected'] : ''}`
      } 
      onClick={() => onSelectProduct(product)}
    >
      <h3 className={styles.title}>{product.name}</h3>

      <div className={styles['image-wrapper']}>
        <img className={styles.image} src={product.imageUri} />
      </div>
    
      <h3 className={styles.price}>{formatMoney(product.price)}</h3>

      <div className={styles.description}>
        <h3>Descrição</h3>

        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard