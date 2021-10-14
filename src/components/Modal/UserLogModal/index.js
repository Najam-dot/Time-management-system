import React from 'react'
import styles from './userLog.module.css'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { AddUserLogs } from '../../../store/actions/userLogAction'
import { useDispatch } from 'react-redux'
const UserLogEditModal = ({
  userLogsEditModel,
  handleCloseModel,
  userLogsModel,
}) => {
  let dispatch = useDispatch()
  const [logs, setLogs] = useState({ logDate: '', hours: '', description: '' })
  const handleEditDate = (e) => {
    return setLogs({ ...logs, logDate: e.target.value })
  }
  const hoursEditHandler = (e) => {
    return setLogs({ ...logs, hours: e.target.value })
  }
  const descriptionEditHandler = (e) => {
    return setLogs({ ...logs, description: e.target.value })
  }
  const savingEditedData = () => {
    handleCloseModel()
    dispatch(AddUserLogs(logs))
  }
  return (
    <Modal show={userLogsModel} onHide={handleCloseModel}>
      <Modal.Header>
        <Modal.Title>Edit log</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="date"
            id="start"
            name="date"
            // min="2018-01-01"
            onChange={handleEditDate}
          />
          <input
            type="num"
            placeholder="Enter Working Hours"
            name="working hours"
            onChange={hoursEditHandler}
          ></input>
          <input
            type="text"
            placeholder=" Enter Description"
            name="lastName"
            onChange={descriptionEditHandler}
          ></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModel}>
          Close
        </Button>
        <Button variant="primary" onClick={savingEditedData}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserLogEditModal
