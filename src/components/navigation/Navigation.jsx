import { Button, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap"
import { useAuth } from "../../context/authentication/AuthProvider"
import { doSignOut } from "../../firebase/authentication"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Navigation = () => {

  const { currentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, []) 

  const handleSignOut = async () => {
    await doSignOut().then(() => {
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