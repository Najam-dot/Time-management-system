import React from 'react'
import styles from './editmanager.module.css'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { SignUpUser } from '../../../store/actions/signUpAction'
import { useDispatch } from 'react-redux'
const AddManager = ({ showEditModel, handleClose }) => {
  let dispatch = useDispatch()
  const [createUser, setCreateUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
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
      userType: 'manager',
    })
  }
  const UpdateNewUser = () => {
    setCreateUser({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password_confirmation: '',
    })
    dispatch(SignUpUser(createUser))
    handleClose()
  }

  return (
    <Modal show={showEditModel} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add Manager</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            // value={createUser.firstName}
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
        <Button variant="primary" onClick={UpdateNewUser}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddManager
