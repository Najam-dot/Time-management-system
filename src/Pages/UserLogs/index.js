import React, { useEffect } from 'react'
import UserCard from '../../components/Dashboard/UserCard'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getuserlogs } from '../../store/actions/userLogAction'
import Header from '../../components/Header'
import styles from './userLogs.module.css'
export default function Index() {
  let { id } = useParams()
  let dispatch = useDispatch()
  const state = useSelector((state) => state.UserReducer)
  useEffect(() => {
    dispatch(getuserlogs(id))
    // eslint-disable-next-line
  }, [id])
  return (
    <>
      <Header />
      <div className={styles.userLogWrap}>
        <h2>User Logs</h2>
        <UserCard userLogs={state.workLogs} />
      </div>
    </>
  )
}
