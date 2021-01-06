import Navbar from "../components/Navbar";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.actions}>
            <h1 className={styles.title}>
              Faça seu pedido<br/> que entregamos<br/> pra você!!!
            </h1>

            <h3 className={styles.subtitle}>
              Escolha o seu pedido e em poucos minutos levaremoss na sua porta
            </h3>

            <a className={styles.button_order}>
              FAZER PEDIDO
            </a>
          </div>

          <div className={styles.image_wrapper}>
            <img src="/image-home.svg" className={styles.image}/>
          </div>
        </div>
      </div>
    </>
  )
}
