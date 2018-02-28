const initialState = {
  user: {},
  isLogin: false
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_TO_STORE':
      return { ...state, user: action.userData }
    case 'CHANGE_LOGIN_STATUS':
      return { ...state, isLogin: action.loginStatus.isLogin }
    default:
      return state
  }
}

export default userReducers