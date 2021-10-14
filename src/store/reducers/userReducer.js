const initialState = {
  users: {},
  workLogs: [],
}
const UserReducer = (state = initialState, action) => {
  // state.users = action.payload
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        users: action.payload,
      }
    case 'GET_USER_LOG_SUCCESS':
      return {
        ...state,
        workLogs: action.payload,
      }
    case 'CLEAR_LOGS_SUCCESS':
      return {
        ...state,
        workLogs: [],
      }
    default:
      return state
  }
}
export default UserReducer
