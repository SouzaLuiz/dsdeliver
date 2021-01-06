
import styles from './StepsHeader.module.css'

export default function StepsHeader () {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>SIGA AS <br/> ETAPAS</h1>
      
        <ul className={styles.items}>
          <li>
            <span className={styles.steps_number}>1</span>
            Selecione os produtos e localização
          </li>

          <li>
            <span className={styles.steps_number}>2</span>
            Depois clique em <strong>“ENVIAR PEDIDO”</strong>
          </li>
        </ul>
      </div>
    </header>
  )
}