import {Account, AccountCreateRequest} from "../../model/BudgetTypes.ts";
import {collection, getDocs, query, where, addDoc, getDoc, doc} from "firebase/firestore";
import {db} from "../../firebase/Firebase.ts";


const getAccountsByUserId = async (userId: string) : Promise<Account[]> => {
  const accountCollection = collection(db, 'accounts')
  return getDocs(query(accountCollection, where('userId', '==', userId))).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      } as Account
    })
  })
}

const createAccount = async (account : AccountCreateRequest) => {
  return addDoc(collection(db, "accounts"), {
    ...account
  })
}

const getAccountById = async (id : string) => {
  return getDoc(doc(db, "accounts", id))
      .then((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        } as Account
      });
}

export { getAccountsByUserId,createAccount, getAccountById }