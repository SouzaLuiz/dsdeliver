
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import styles from './order-sumary.module.css'

function formatMoney (value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    minimumFractionDigits: 2
  }).format(value)
}

const OrderSumary: React.FC = () => {
  const { createOrder, selectedProducts, totalPrice } = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.amount}>
          <strong className={styles['text-bold']}>{selectedProducts.length}</strong>
          PEDIDOS SELECIONADOS
        </span>

        <span className={styles.amount}>
          <strong className={styles['text-bold']}>{formatMoney(totalPrice)}</strong>
          VALOR TOTAL
        </span>
      </div>

      <button className={styles['make-order']} onClick={createOrder}>
        Fazer pedido
      </button>
    </div>
  )
}

export default OrderSumary;