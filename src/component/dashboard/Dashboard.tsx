import {Container} from "react-bootstrap";
import {getUserSession} from "../../service/session/SessionService.ts";
import {useEffect} from "react";
import {useAuth} from "../../service/context/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {User} from "../../model/BudgetTypes.ts";

const Dashboard = () => {

  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    getUserSession().then((userSession: User | null) => {
      if (!user && !userSession) {
        navigate('/')
      }
    })
  }, []);

  return (
    <Container>
      <h1>Dashboard</h1>
      {  user && <p>{user.name}</p> }
    </Container>
  )
}

export default Dashboard