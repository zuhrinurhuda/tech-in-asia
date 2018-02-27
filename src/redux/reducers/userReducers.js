const initialState = {
  user: {},
  isLogin: false
}

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER_TO_STORE':
      return { ...state, user: action.user }
    default:
      break;
  }
}

export default userReducers