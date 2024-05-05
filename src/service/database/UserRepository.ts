import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'
import { User } from '../../model/BudgetTypes'

const getUser = async (id: string) : Promise<User> => {
  const userDoc = await getDoc(doc(db, 'users', id))
  return userDoc.data() as User
}

const addUser = async (id: string, name: string, email: string) : Promise<User> => {
  const createdUser =  await setDoc(doc(db, 'users', id), {id, name, email})
  return createdUser as User
}

export { getUser, addUser }