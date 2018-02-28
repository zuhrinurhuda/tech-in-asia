const save_user_to_store = (userData) => {
  return {
    type: 'SAVE_USER_TO_STORE',
    userData
  }
}

const change_login_status = (loginStatus) => {
  return {
    type: 'CHANGE_LOGIN_STATUS',
    loginStatus
  }
}

export {
  save_user_to_store,
  change_login_status
}