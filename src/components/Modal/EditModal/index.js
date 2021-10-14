import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { EditUserLogsUsers } from '../../../store/actions/userLogAction'
import { useDispatch } from 'react-redux'
import styles from './editModal.module.css'
const UserEditModal = ({
  userLogsModel,
  handleClose,
  curentItem,
  hoursHandler,
  descriptionHandler,
  handleDate,
}) => {
  let dispatch = useDispatch()
  const createNewUser = () => {
    handleClose()
    dispatch(EditUserLogsUsers(curentItem))
  }
  return (
    <Modal show={userLogsModel} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Edit WorkLog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="date"
            id="start"
            name="date"
            value={curentItem.logDate}
            onChange={handleDate}
          />
          <input
            type="num"
            placeholder="Enter Working Hours"
            name="working hours"
            required
            value={curentItem.hours}
            onChange={hoursHandler}
          ></input>
          <input
            type="text"
            placeholder=" Enter Description"
            name="lastName"
            required
            value={curentItem.description}
            onChange={descriptionHandler}
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

export default UserEditModal
