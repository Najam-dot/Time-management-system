import React from 'react'
import styles from './hours.module.css'
import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { PreferedHours } from '../../../store/actions/userLogAction'
import { useDispatch } from 'react-redux'
const PreferedWorkingHours = ({ showEditModelHours, handleClose }) => {
  let dispatch = useDispatch()
  const [workingHours, setWorkingHours] = useState('')

  const handlePreferedHours = (e) => {
    setWorkingHours(e.target.value)
  }
  const UpdateWorkingHours = () => {
    dispatch(PreferedHours(workingHours))
    handleClose()
  }
  return (
    <Modal show={showEditModelHours} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Prefered Working Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.formWrap}>
          <input
            type="number"
            placeholder="Enter Prefered Hours"
            name="preferedHours"
            required
            onChange={handlePreferedHours}
          ></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={UpdateWorkingHours}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PreferedWorkingHours
