
export const saveUserSession = (user) => {
  sessionStorage.setItem('currentUser', JSON.stringify(user))
}

export const getUserSession = () => {
  return JSON.parse(sessionStorage.getItem('currentUser'))
}

export const isUserLoggedIn = () => {
  return !!sessionStorage.getItem('currentUser')
}