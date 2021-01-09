import Link from 'next/link'

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.actions}>
            <h1 className={styles.title}>
              Faça seu pedido que entregamos pra você!!!
            </h1>

            <h3 className={styles.subtitle}>
              Escolha o seu pedido e em poucos minutos levaremos na sua porta.
            </h3>

            <Link href="/products">
              <a className={styles.button_order}>
                FAZER PEDIDO
              </a>
            </Link>
          </div>

          <div className={styles.image_wrapper}>
            <img src="/image-home.svg" className={styles.image}/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
