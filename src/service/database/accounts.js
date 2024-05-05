import { addDoc, getDocs, collection, query, where, getDoc, doc } from "firebase/firestore";
import {db} from "../../firebase/firebase.js";

export const createAccount = async (account, uid) => {
  return addDoc(collection(db, "accounts"), {
    userId: uid,
    ...account
  })
}

export const getAccountById = async (id) => {
  return getDoc(doc(db, "accounts", id))
}

export const getAccountsByUserId = async (userId) => {
  const accountsCollection = collection(db, 'accounts')
  return getDocs(query(accountsCollection, where('userId', '==', userId)))
}
