const save_user_to_store = (user) => {
  return {
    type: 'SAVE_USER_TO_STORE',
    user
  }
}

const change_login_status = (isLogin) => {
  return {
    type: 'CHANGE_LOGIN_STATUS',
    isLogin
  }
}

export default {
  save_user_to_store,
  change_login_status
}