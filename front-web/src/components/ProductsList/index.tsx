import { Product } from "../../pages/products"

import ProductCard from "../ProductCard";

import styles from './products-list.module.css'

interface Props {
  products: Product[]
  onSelectProduct: (product: Product) => void
  selectedProducts: Product[]
}

function checkIsSelected (selectedProducts, product) {
  return selectedProducts.some(item => item.id === product.id)
}

const ProductsList: React.FC<Props> = ({ products, onSelectProduct, selectedProducts }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {products.map(product => (
          <ProductCard 
            isSelected={checkIsSelected(selectedProducts, product)}
            key={product.id} 
            product={product} 
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList