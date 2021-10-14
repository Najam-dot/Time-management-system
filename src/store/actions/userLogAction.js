import axios from 'axios'
export const AddUserLogs = (data) => (dispatch) => {
  axios({
    method: 'post',
    url: 'http://34.210.129.167/api/work-logs',
    data: data,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch(getLogs())
    })
    .catch(({ response }) => {
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}
export const getLogs = () => (dispatch) => {
  let id = localStorage.getItem('userId')
  axios({
    method: 'get',
    url: `http://34.210.129.167/api/user/${id}/work-logs`,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_USER_LOG_SUCCESS',
        payload: response.data.workLogs.data,
      })
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}
export const EditUserLogs = (data) => (dispatch) => {
  let id = localStorage.getItem('userId')
  const data1 = {
    logDate: data.logDate,
    hours: data.hours,
    description: data.description,
  }
  axios({
    method: 'put',
    url: `http://34.210.129.167/api/user/${id}/work-logs/${data.id}`,
    data: data1,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch(getLogs())
    })
    .catch(({ response }) => {
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}
export const filterData = (data) => (dispatch) => {
  axios({
    method: 'get',
    url: `http://34.210.129.167/api/work-logs/${data.startDate}/${data.endDate}`,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      // dispatch(getLogs())
    })
    .catch(({ response }) => {
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}

export const getuserlogs = (id) => (dispatch) => {
  axios({
    method: 'get',
    url: `http://34.210.129.167/api/user/${id}/work-logs`,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: 'GET_USER_LOG_SUCCESS',
        payload: response.data.workLogs.data,
      })
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}
export const PreferedHours = (workingHours) => (dispatch) => {
  const data = {
    workingHours: workingHours,
  }
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  let id = localStorage.getItem('userId')
  axios({
    method: 'patch',
    url: `http://34.210.129.167/api/users/${id}/preferred-working-hours`,
    data: data,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      dispatch(getLogs())
    })
    .catch(({ response }) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      dispatch(getuserlogs())
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}
export const clearLogs = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_LOGS_SUCCESS',
    payload: [],
  })
}
export const EditUserLogsUsers = (data) => (dispatch) => {
  const data1 = {
    logDate: data.logDate,
    hours: data.hours,
    description: data.description,
  }
  axios({
    method: 'put',
    url: `http://34.210.129.167/api/user/${data.userId}/work-logs/${data.id}`,
    data: data1,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch(getuserlogs(data.userId))
    })
    .catch(({ response }) => {
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}
