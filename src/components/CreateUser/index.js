import React from 'react'
import styles from './createUser.module.css'
const CreateUser = () => {
  return (
    <div className={styles.user}>
      <input type="text" placeholder="Enter Email" name="email" required />

      <input type="password" placeholder="Enter Password" name="psw" required />

      <input
        type="password"
        placeholder="Repeat Password"
        name="psw-repeat"
        required
      />

      <input type="checkbox" checked="checked" name="remember" />
    </div>
  )
}

export default CreateUser
