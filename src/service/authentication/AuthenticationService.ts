import {createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential} from "firebase/auth";
import {LoginRequest, RegistrationRequest, User} from "../../model/BudgetTypes";
import {auth} from "../../firebase/Firebase";
import {addUser, getUser} from "../database/UserRepository";

const login = async (request: LoginRequest) : Promise<User> => {
  const userCredential : UserCredential = await signInWithEmailAndPassword(auth, request.email, request.password)
  return await getUser(userCredential.user.uid)
}

const register = async (request: RegistrationRequest) : Promise<void> => {
  let userCredential : UserCredential = await createUserWithEmailAndPassword(auth, request.email, request.password)
  await addUser(userCredential.user.uid, request.name, request.email);
}

const logout = async () => {
  await auth.signOut()
}

export { login, logout, register }