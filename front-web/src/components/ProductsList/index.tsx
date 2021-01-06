import { Product } from "../../pages/orders";

import ProductCard from "../ProductCard";

import styles from './ProductsList.module.css'

interface Props {
  products: Product[]
}

export default function ProductsList ({ products }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    </div>
  )
}