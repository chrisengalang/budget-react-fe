import { auth } from "../firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"


export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}