import Link from 'next/link'

import styles from './navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <Link href="/">
          <a>
            <img src="/logo.svg" />
          </a>
        </Link>
      </div>
    </nav>
  )
}