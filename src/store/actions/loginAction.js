import axios from 'axios'
export const LoginUser = (data, history) => (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  axios({
    method: 'post',
    url: 'http://34.210.129.167/api/login',
    data: data,
    // headers: { 'Content-Type': 'multipart/form-data' },
    contentType: 'application/json',
  })
    .then(function (response) {
      const data = response.data
      dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data })
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.user.id)
      localStorage.setItem('role', data.user.roles[0].name)
      history.push('/dashBoard')
    })
    .catch(function ({ response }) {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      if (response)
        if (response.status === 422) {
          alert(response.data[0])
          dispatch({
            type: 'USER_LOGIN_ERROR',
            payload: response.data,
          })
        }
      if (response.status === 403) {
        alert(response.data.message)
        dispatch({
          type: 'USER_LOGIN_ERROR',
          payload: response.data.message,
        })
      }

      //handle error
    })
}
