
import { Product } from '../../pages/orders'
import styles from './ProductCard.module.css'

interface Props {
  product: Product
}

function formatMoney (value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    minimumFractionDigits: 2
  }).format(value)
}

export default function ProductCard ({ product }: Props) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{product.name}</h3>

      <div className={styles.image_wrapper}>
        <img className={styles.image} src={product.imageUri} />
      </div>
    
      <h3 className={styles.price}>R$ {formatMoney(product.price)}</h3>

      <div className={styles.description}>
        <h3>Descrição</h3>

        <p>{product.description}</p>
      </div>
    </div>
  )
}