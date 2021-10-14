import axios from 'axios'

export const getUsers = () => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  axios
    .get('http://34.210.129.167/api/users', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: response.data.users,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      console.error('There was an error!', error)
    })
}
export const addUser = (data) => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  axios({
    method: 'post',
    url: 'http://34.210.129.167/api/users',
    data: data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then(function (response) {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      dispatch(getUsers())
    })
    .catch(function ({ response }) {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      if (response)
        if (response.status === 422) {
          alert(response.data[0])
          // dispatch({
          //   type: 'USER_LOGIN_ERROR',
          //   payload: response.data,
          // })
        }
      if (response.status === 403) {
        alert(response.data.message)
        // dispatch({
        //   type: 'USER_LOGIN_ERROR',
        //   payload: response.data.message,
        // })
      }
    })
}
export const userDeleted = (id) => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  axios({
    method: 'delete',
    url: `http://34.210.129.167/api/users/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      dispatch(getUsers())
    })
    .catch((err) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      console.log(err)
    })
}
export const EditUser = (data) => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  const data1 = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    password_confirmation: data.password_confirmation,
  }
  axios({
    method: 'put',
    url: `http://34.210.129.167/api/users/${data.id}`,
    data: data1,
    headers: {
      Authorization: `Bearer  ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      dispatch(getUsers())
    })
    .catch(({ response }) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      if (response)
        if (response.status === 422) {
          alert(response.data[0])
        }
      if (response.status === 403) {
        alert(response.data.message)
      }
    })
}
export const paginationData = (pageNumber) => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  axios
    .get(`http://34.210.129.167/api/users?page=${pageNumber}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      dispatch({
        type: 'GET_USER_SUCCESS',
        payload: response.data.users,
      })
    })
    .catch((error) => {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })

      console.error('There was an error!', error)
    })
}
