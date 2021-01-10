import Link from 'next/link'

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
            
        <main className={styles.content}>
          <div className={styles.actions}>
            <h1 className={styles.title}>
              Faça seu pedido que entregamos pra você!!!
            </h1>

            <h3 className={styles.subtitle}>
              Escolha o seu pedido e em poucos minutos levaremos na sua porta.
            </h3>

            <Link href="/products">
              <a className={styles['button-order']}>
                VER PRODUTOS
              </a>
            </Link>
          </div>

          <div className={styles['image-wrapper']}>
            <img src="/image-home.svg" className={styles.image}/>
          </div>
        </main>

      <Footer />
    </div>
  )
}
