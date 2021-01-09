import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";
import { Product } from "../../pages/products"

import ProductCard from "../ProductCard";

import styles from './products-list.module.css'

interface Props {
  products: Product[]
}

const ProductsList: React.FC<Props> = ({ products }) => {
  const { selectedProducts, checkIsSelected } = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {products.map(product => (
          <ProductCard 
            isSelected={checkIsSelected(selectedProducts, product)}
            key={product.id} 
            product={product} 
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList