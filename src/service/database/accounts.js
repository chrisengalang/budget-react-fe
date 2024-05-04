import {doc, getDoc, getDocs, setDoc, collection, query, where } from "firebase/firestore";
import {db} from "../../firebase/firebase.js";

export const createAccount = async (account, uid) => {
  return setDoc(doc(db, "accounts"), {
    userId: uid,
    ...account
  })
}

export const getAccountsByUserId = async (userId) => {
  const accountsCollection = collection(db, 'accounts')
  return getDocs(query(accountsCollection, where('userId', '==', userId)))
}
