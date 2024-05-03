import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export const addUser = async (authUser, name) => {
  return setDoc(doc(db, "users", authUser.uid), {
    uid: authUser.uid,
    name: name,
    email: authUser.email
  })
}

export const getUser = async (uid) => {
  return getDoc(doc(db, "users", uid))
}