import {doc, addDoc, getDocs, collection, query, where } from "firebase/firestore";
import {db} from "../../firebase/firebase.js";

export const createAccount = async (account, uid) => {
  return addDoc(collection(db, "accounts"), {
    userId: uid,
    ...account
  })
}

export const getAccountsByUserId = async (userId) => {
  console.log('userId getAccountsByUserId', userId)
  const accountsCollection = collection(db, 'accounts')
  return getDocs(query(accountsCollection, where('userId', '==', userId)))
}
