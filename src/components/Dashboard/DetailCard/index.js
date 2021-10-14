import React, { useState } from 'react'
import styles from './detailCard.module.css'
import { useDispatch } from 'react-redux'

import { userDeleted } from '../../../store/actions/userAction'
import EditManager from '../../Modal/EditManagerModal'
import { Link } from 'react-router-dom'
const DetailCard = (props) => {
  let dispatch = useDispatch()
  const [showEditModel, setShowEditModel] = useState(false)
  const [currentItem, setCurrentItem] = useState({})

  const handleDelete = (id) => {
    dispatch(userDeleted(id))
  }
  const handleEdit = (item) => {
    setCurrentItem(item)
    setShowEditModel(true)
  }
  const handleClose = () => {
    setShowEditModel(false)
  }
  const role = localStorage.getItem('role')
  return (
    <div className={styles.detailCard}>
      <EditManager
        showEditModel={showEditModel}
        handleClose={handleClose}
        currentItem={currentItem}
      />
      <div className={styles.dashBoardTable}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              {role === 'admin' || role === 'manager' ? (
                <>
                  {role === 'admin' ? <th>Role</th> : ''}
                  {role === 'admin' || role === 'manager' ? (
                    <th>WorkLogs</th>
                  ) : (
                    ''
                  )}

                  <th>Edit / Delete</th>
                </>
              ) : (
                ''
              )}
            </tr>
          </thead>
          <tbody>
            {props.userData &&
              props.userData.map((item, i) => (
                <tr key={i}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>

                  {role === 'admin' ? (
                    <>
                      <td>{item.roles[0].name}</td>
                    </>
                  ) : null}
                  {role === 'admin' || role === 'manager' ? (
                    <td>
                      {item.roles[0].name === 'user' ? (
                        <Link to={`/user-logs/${item.id}`}>
                          <button className={styles.showBtn}>Show More</button>
                        </Link>
                      ) : (
                        'Managers have not logs'
                      )}
                    </td>
                  ) : null}
                  {role === 'admin' || role === 'manager' ? (
                    <td>
                      <div className={styles.buttons}>
                        <button
                          onClick={() => handleEdit(item)}
                          className={styles.EditBtn}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className={styles.DeleteBtn}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DetailCard
