import React from 'react'
import styles from './tabs.module.css'
const Tabss = ({ handleClickTab, selectType }) => {
  return (
    <div className={styles.tabButtons}>
      <button
        className={selectType === 'All' ? 'active' : ''}
        onClick={() => handleClickTab('All')}
      >
        All
      </button>
      <button
        className={selectType === 'Managers' ? 'active' : ''}
        onClick={() => handleClickTab('Managers')}
      >
        Managers
      </button>
      <button
        className={selectType === 'Users' ? 'active' : ''}
        onClick={() => handleClickTab('Users')}
      >
        Users
      </button>
    </div>
  )
}

export default Tabss
