import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import DetailCard from './DetailCard'
import Header from '../Header'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import UserLogModal from '.././Modal/UserLogModal'
import { getLogs, clearLogs } from '../../store/actions/userLogAction'
import PreferedWorkingHours from '../Modal/PreferedHoursModal'
import { getUsers, paginationData } from '../../store/actions/userAction'
import PopUp from '../Modal/index'
import Tabs from '../../components/Tabs'
import AddManager from '../Modal/AddManager'
import ReactPaginate from 'react-paginate'
const Dashboard = () => {
  const [show, setShow] = useState(false)
  const [userData, setUserData] = useState([])
  const [copyUserData, setCopyUserData] = useState([])
  const [userLogsModel, setUserLogsModel] = useState(false)
  const [selectType, setSelectType] = useState('')
  const [showEditModel, setShowEditModel] = useState(false)
  const [showEditModelHours, setShowEditModelHours] = useState(false)
  const [pageCount, setPageCount] = useState(25)
  const role = localStorage.getItem('role')
  const state = useSelector((state) => state.UserReducer)
  const handleClose = () => {
    setShow(false)
    setShowEditModel(false)
    setShowEditModelHours(false)
  }
  useEffect(() => {
    if (state.users.last_page !== 'undefined') {
      setPageCount(state.users.last_page)
    }
  }, [state])
  const handleShow = () => setShow(true)

  useEffect(() => {
    if (role === 'admin') {
      dispatch(clearLogs())
    }
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    switch (selectType) {
      case 'All':
        setUserData(state.users.data)
        break
      case 'Managers':
        const filterDataManager =
          copyUserData &&
          copyUserData.filter((item) => item.roles[0].name === 'manager')
        setUserData(filterDataManager)
        break
      case 'Users':
        const FilteredUserData =
          copyUserData &&
          copyUserData.filter((item) => item.roles[0].name === 'user')
        setUserData(FilteredUserData)
        break
      default:
        break
    }
    // eslint-disable-next-line
  }, [selectType])
  useEffect(() => {
    if (state.users && state.users.data) {
      setCopyUserData(state.users.data)
      setUserData(state.users.data)
    }
    // eslint-disable-next-line
  }, [state])
  let dispatch = useDispatch()
  useEffect(() => {
    if (role === 'user') {
      dispatch(getLogs())
      return
    } else dispatch(getUsers())
    // eslint-disable-next-line
  }, [role])

  const handleCloseModel = () => {
    setUserLogsModel(false)
  }
  const handleShowModel = () => {
    setUserLogsModel(true)
  }
  const handleClickTab = (name) => {
    setSelectType(name)
  }
  const handleShowModelManager = () => {
    setShowEditModel(true)
  }
  const handlePreferedHours = () => {
    setShowEditModelHours(true)
  }
  const handlePageClick = (data) => {
    setSelectType('All')
    dispatch(paginationData(data.selected + 1))
  }
  return (
    <section className={styles.dashBoard}>
      <Header />

      <div className={styles.dashBoardWrap}>
        <h2>Dashboard</h2>
        <PopUp show={show} handleClose={handleClose} />
        <UserLogModal
          userLogsModel={userLogsModel}
          handleCloseModel={handleCloseModel}
        />

        {role === 'manager' || role === 'admin' ? (
          <div className={styles.addUser}>
            <Button variant="primary" onClick={handleShow}>
              Add New User
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={handleShowModel}>
            Add Logs
          </Button>
        )}
        {role === 'admin' ? (
          <Button variant="primary" onClick={handleShowModelManager}>
            Add Manager
          </Button>
        ) : (
          ''
        )}
        <PreferedWorkingHours
          showEditModelHours={showEditModelHours}
          handleClose={handleClose}
        />
        <AddManager showEditModel={showEditModel} handleClose={handleClose} />
        <div className={styles.WorkingBtn}>
          {role === 'user' ? (
            <Button variant="primary" onClick={handlePreferedHours}>
              Prefered Hours
            </Button>
          ) : (
            ''
          )}
        </div>

        <div className={styles.dashBoardCardWrap}>
          {role === 'user' ? (
            <UserCard userLogs={state.workLogs} />
          ) : (
            <div className={styles.cardOuter}>
              {role === 'admin' ? (
                <Tabs handleClickTab={handleClickTab} selectType={selectType} />
              ) : (
                ''
              )}
              <div className={styles.cardItem}>
                <DetailCard userData={userData} />
              </div>
              <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
