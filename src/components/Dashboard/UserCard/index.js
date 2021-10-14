import React, { useState } from 'react'
import styles from './userCard.module.css'
import { Pen } from 'react-bootstrap-icons'
import UserEditModal from '../../Modal/EditModal'
import { useDispatch } from 'react-redux'
import { filterData } from '../../../store/actions/userLogAction'
const UserCard = ({ userLogs }) => {
  let dispatch = useDispatch()
  const [userLogsModels, setUserLogsModels] = useState(false)
  const [filter, setFilter] = useState({
    startDate: '',
    endDate: '',
  })

  const [curentItem, setCurentItem] = useState({
    userId: '',
    id: '',
    logDate: '',
    hours: '',
    description: '',
  })
  const handleClose = () => {
    setUserLogsModels(false)
  }
  const handleLogsEdit = (item) => {
    setCurentItem({
      userId: item.user.id,
      id: item.id,
      logDate: item.log_date,
      hours: item.hours,
      description: item.description,
    })
    setUserLogsModels(true)
  }
  const hoursHandler = (e) => {
    return setCurentItem({ ...curentItem, hours: e.target.value })
  }
  const handleDate = (e) => {
    return setCurentItem({ ...curentItem, logDate: e.target.value })
  }

  const descriptionHandler = (e) => {
    return setCurentItem({ ...curentItem, description: e.target.value })
  }

  const handleStartDate = (e) => {
    setFilter({
      ...filter,
      startDate: e.target.value,
    })
  }
  const handleEndDate = (e) => {
    setFilter({
      ...filter,
      endDate: e.target.value,
    })
  }
  const handleFilter = () => {
    if (filter.startDate && filter.endDate) {
      dispatch(filterData(filter))
    } else {
      alert('Please Enter Start Date and End Date')
    }
  }
  return (
    <>
      <UserEditModal
        userLogsModel={userLogsModels}
        handleClose={handleClose}
        curentItem={curentItem}
        hoursHandler={hoursHandler}
        handleDate={handleDate}
        descriptionHandler={descriptionHandler}
      />
      <div className={styles.filterDate}>
        <input type="date" id="start" name="date" onChange={handleStartDate} />
        <input type="date" id="end" name="date" onChange={handleEndDate} />
        <button onClick={handleFilter} className={styles.filterButn}>
          Filter Users
        </button>
      </div>
      <div className={styles.userWrap}>
        {userLogs &&
          userLogs.map((item) => (
            <div className={styles.userCard}>
              <div className={styles.cardDate}>
                <p>{item.log_date}</p>
              </div>
              <div className={styles.workingHours}>
                <p
                  className={
                    item.user.working_hours <= item.hours
                      ? styles.hoursColor
                      : styles.hourscolor2
                  }
                >
                  {item.hours}
                </p>
                <span>/Hrs</span>
              </div>
              <div className={styles.description}>
                <span>Description: </span>
                <p>{item.description}</p>
              </div>
              <div className={styles.cardIcons}>
                <Pen onClick={() => handleLogsEdit(item)} />
              </div>
              {/* </div> */}
            </div>
          ))}
      </div>
    </>
  )
}

export default UserCard
