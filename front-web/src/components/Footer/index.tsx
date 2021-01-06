import styles from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={styles.wrapper}>
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      
      <div className={styles.icons}>
        <a href="#" rel="noopener noreferrer">
          <img src="/youtube.svg" />
        </a>

        <a href="https://www.linkedin.com/in/luizhsouza/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.svg" />
        </a>

        <a href="#" rel="noopener noreferrer">
          <img src="/instagram.svg" />
        </a>
      </div>
    </footer>
  )
}