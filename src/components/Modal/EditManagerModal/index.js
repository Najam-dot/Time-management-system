import React from 'react'
import styles from './editmanager.module.css'
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { EditUser } from '../../../store/actions/userAction'
// import { addUser } from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'
const EditManager = ({ showEditModel, handleClose, currentItem }) => {
  let dispatch = useDispatch()
  const [createUser, setCreateUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
  })
  useEffect(() => {
    setCreateUser({
      id: currentItem.id,
      firstName: currentItem.firstName,
      lastName: currentItem.lastName,
      email: currentItem.email,
    })
  }, [currentItem])
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
      userType: currentItem && currentItem.roles && currentItem.roles[0].name,
    })
  }
  const UpdateNewUser = () => {
    dispatch(EditUser(createUser))
    handleClose()
  }

  return (
    <Modal show={showEditModel} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          update {currentItem && currentItem.roles && currentItem.roles[0].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            value={createUser.firstName}
            required
            onChange={firstNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            value={createUser.lastName}
            required
            onChange={lastNameHandler}
          ></input>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={createUser.email}
            required
            onChange={emailHandler}
          ></input>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={createUser.password}
            required
            onChange={passwordHandler}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={createUser.password_confirmation}
            required
            onChange={confirmPasswordHandler}
          ></input>
          {/* <select onChange={optionHandler}>
            <option>Manager</option>
            <option>User</option>
          </select> */}
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

export default EditManager
