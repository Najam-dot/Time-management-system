import axios from 'axios'
export const SignUpUser = (data, history) => async (dispatch) => {
  dispatch({
    type: 'HANDLE-SHOW-LOADER',
    payload: true,
  })
  await axios({
    method: 'post',
    url: 'http://34.210.129.167/api/register',
    data: data,
    contentType: 'application/json',
  })
    .then(function (response) {
      dispatch({
        type: 'HANDLE-CLOSE-LOADER',
        payload: false,
      })
      history.push('/')
    })
    .catch(function ({ response }) {
      if (response) {
        dispatch({
          type: 'HANDLE-CLOSE-LOADER',
          payload: false,
        })
        if (response.status === 422) {
          alert(response.data[0])
          console.log(response.data)
        }
        if (response.status === 403) {
          alert(response.data.message)
          dispatch({
            type: 'USER_LOGIN_ERROR',
            payload: response.data.message,
          })
          console.log(response.data)
        }
      }
    })
}
