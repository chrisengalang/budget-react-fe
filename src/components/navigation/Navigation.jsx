import { Button, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap"
import { useAuth } from "../../context/authentication/AuthProvider"
import { useNavigate } from "react-router-dom"
import { doSignOut } from "../../service/authentication/authentication"
import { useEffect } from "react"

const Navigation = () => {

  const { currentUser, setCurrentUser, userLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const sessionUser = sessionStorage.getItem('currentUser')

    if (!sessionUser) {
      navigate('/')
    } else {
      setCurrentUser(JSON.parse(sessionUser))
    }

  }, [])

  const handleSignOut = async () => {
    await doSignOut().then(() => {
      setCurrentUser(null)
      sessionStorage.removeItem('currentUser')
      navigate('/')
    })
  }

  return (
    <Navbar>
      <Container>
        <NavbarBrand>Budget App</NavbarBrand>
        { 
          currentUser && !userLoading &&
          <Nav className="me-auto">
            <NavItem>
              <NavLink href='/'>Accounts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/transactions'>Transactions</NavLink>
            </NavItem>
            <NavItem className='justify-content-end'>
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