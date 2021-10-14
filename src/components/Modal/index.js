import React from 'react'
import styles from './modal.module.css'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { addUser } from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'
const PopUp = ({ show, handleClose }) => {
  const [createUser, setCreateUser] = useState({})
  let dispatch = useDispatch()
  const firstNameHandler = (e) => {
    return setCreateUser({ ...createUser, firstName: e.target.value })
  }

  const lastNameHandler = (e) => {
    return setCreateUser({ ...createUser, lastName: e.target.value })
  }

  const emailHandler = (e) => {
    return setCreateUser({ ...createUser, email: e.target.value })
  }

  const passwordHandler = (e) => {
    return setCreateUser({ ...createUser, password: e.target.value })
  }
  const confirmPasswordHandler = (e) => {
    return setCreateUser({
      ...createUser,
      password_confirmation: e.target.value,
      userType: 'user',
    })
  }
  const createNewUser = () => {
    handleClose()
    dispatch(addUser(createUser))
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Create User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={firstNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={lastNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={emailHandler}
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={passwordHandler}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            onChange={confirmPasswordHandler}
          ></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={createNewUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PopUp
