import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {deleteUserSession} from "../../service/session/SessionService.ts";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../service/context/AuthProvider.tsx";

const Navigation = () => {

  const {user, setUser} = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    setUser(null)
    await deleteUserSession()
    navigate('/')
  }

  return (
      <Navbar>
        <Container>
          <Navbar.Brand>Budget App</Navbar.Brand>
          {
              user &&
              <Nav className="me-auto">
                <Nav.Item>
                  <Nav.Link href='/'>Accounts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/transactions'>Transactions</Nav.Link>
                </Nav.Item>
                <Nav.Item className='justify-content-end'>
                  <Button onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </Nav.Item>
              </Nav>
          }
        </Container>
      </Navbar>
  )
}

export default Navigation