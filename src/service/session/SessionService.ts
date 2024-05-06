import {User} from "../../model/BudgetTypes.ts";

const saveUserSession = async (user: User) => {
  sessionStorage.setItem('user', JSON.stringify(user))
}

const getUserSession = async () : Promise<User | null> => {
  const user = sessionStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

const deleteUserSession = async () => {
  sessionStorage.removeItem('user')
}

export { saveUserSession, getUserSession, deleteUserSession }