import {createContext, useContext, useEffect, useState} from "react";
import {AuthContextType, AuthProviderProps, User} from "../../model/BudgetTypes.ts";
import {getUserSession} from "../session/SessionService.ts";

const contextDefaults : AuthContextType = {
  user: null,
  setUser: () => {},
  loading: true,
  setLoading: () => {}
}

const AuthContext = createContext<AuthContextType>(contextDefaults)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({children} : AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserSession().then((user: User | null) => {
      setUser(user)
      setLoading(false)
    })
  }, []);

  const value = {
    user,
    setUser,
    loading,
    setLoading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
export { AuthProvider, useAuth }