import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/images/clock.png'
import { useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory()
  const hanldLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('userId')
    history.push('/')
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.headerLogo}>
          <a href="#!">
            <img src={logo} alt="#"></img>
          </a>
        </div>
        <nav>
          <button onClick={hanldLogout}>LOG OUT</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
