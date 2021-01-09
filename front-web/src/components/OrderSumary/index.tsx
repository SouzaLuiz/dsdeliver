
import { useContext } from 'react';
import { OrderContext } from '../../context/OrderContext';
import styles from './order-sumary.module.css'

const OrderSumary: React.FC = () => {
  const { showData } = useContext(OrderContext)

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.amount}>
          <strong className={styles['text-bold']}>2</strong>
          PEDIDOS SELECIONADOS
        </span>

        <span className={styles.amount}>
          <strong className={styles['text-bold']}>R$ 50,00</strong>
          VALOR TOTAL
        </span>
      </div>

      <button className={styles['make-order']} onClick={showData}>
        Fazer pedido
      </button>
    </div>
  )
}

export default OrderSumary;