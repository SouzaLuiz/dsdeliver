import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navbar () {
  return (
    <nav className={styles.wrapper}>
      <div className="container">
        <Link href="/">
          <a>
            <img src="/logo.svg" />
          </a>
        </Link>
      </div>
    </nav>
  )
}