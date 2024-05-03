import { Button, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap"
import { useAuth } from "../../context/authentication/AuthProvider"
import { useNavigate } from "react-router-dom"
import { doSignOut } from "../../service/authentication/authentication"
import { useEffect } from "react"

const Navigation = () => {

  const { currentUser, setCurrentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [])

  const handleSignOut = async () => {
    await doSignOut().then(() => {
      setCurrentUser(null)
      navigate('/')
    })
  }

  return (
    <Navbar>
      <Container>
        <NavbarBrand>Budget App</NavbarBrand>
        { 
          currentUser && 
          <Nav className="me-auto">
            <NavItem>
              <NavLink href='/'>Accounts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/transactions'>Transactions</NavLink>
            </NavItem>
            <NavItem>
              <Button onClick={handleSignOut}>
                Sign Out
              </Button>
            </NavItem>
          </Nav>
        }
      </Container>
    </Navbar>
  )
}

export default Navigation