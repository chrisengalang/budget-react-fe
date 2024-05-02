import { Container, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap"

const Navigation = () => {

  return (
    <Navbar>
      <Container>
        <NavbarBrand>Budget App</NavbarBrand>
        <Nav className="me-auto">
          <NavItem>
            <NavLink href='/'>Accounts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/transactions'>Transactions</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation