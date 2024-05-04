import { doc, getDoc, setDoc, addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"

export const addUser = async (authUser, name) => {
  return addDoc(collection(db, "users"), {
    uid: authUser.uid,
    name: name,
    email: authUser.email
  })
}

export const getUser = async (uid) => {
  return getDoc(doc(db, "users", uid))
}