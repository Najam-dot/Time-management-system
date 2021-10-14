const initialState = {
  isActive: false,
}
const LoaderReducer = (state = initialState, action) => {
  // state.users = action.payload
  switch (action.type) {
    case 'HANDLE-SHOW-LOADER':
      return {
        ...state,
        isActive: action.payload,
      }
    case 'HANDLE-CLOSE-LOADER':
      return {
        ...state,
        isActive: action.payload,
      }
    default:
      return state
  }
  // return state
}
export default LoaderReducer
