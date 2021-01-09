
import styles from './order-steps.module.css'

export default function OrderSteps () {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>SIGA AS ETAPAS</h1>
      
        <ul>
          <li className={styles['list-item']}>
            <span className={styles['step-number']}>1</span>
            Selecione os produtos e localização
          </li>

          <li className={styles['list-item']}>
            <span className={styles['step-number']}>2</span>
            Depois clique em <strong className={styles.bold}>“FAZER PEDIDO”</strong>
          </li>
        </ul>
      </div>      
    </header>
  )
}