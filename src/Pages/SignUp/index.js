import React from 'react'
import styles from './signUp.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { SignUpUser } from '../../store/actions/signUpAction'
const SignUp = () => {
  let dispatch = useDispatch()
  let history = useHistory()

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  const fNameHandler = (e) => {
    return setNewUser({ ...newUser, firstName: e.target.value })
  }
  const lastNameHandler = (e) => {
    return setNewUser({ ...newUser, lastName: e.target.value })
  }
  const emailHandler = (e) => {
    return setNewUser({ ...newUser, email: e.target.value })
  }
  const passwordHandler = (e) => {
    return setNewUser({ ...newUser, password: e.target.value })
  }
  const confirmPasswordHandler = (e) => {
    return setNewUser({ ...newUser, password_confirmation: e.target.value })
  }

  const createUser = () => {
    if (
      newUser.firstName &&
      newUser.lastName &&
      newUser.email &&
      newUser.password &&
      newUser.password_confirmation
    ) {
      dispatch(SignUpUser(newUser, history))
    } else {
      alert('please input required feild')
    }
  }
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpWrap}>
        <h2>Registeration Form</h2>
        <form>
          <input
            type="text"
            placeholder="First Name"
            onChange={fNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            onChange={lastNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={emailHandler}
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordHandler}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={confirmPasswordHandler}
          ></input>

          <button type="button" onClick={createUser}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
