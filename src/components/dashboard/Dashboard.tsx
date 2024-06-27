import { Container, Navbar, Row, Table } from "react-bootstrap"
import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Budget App</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default Dashboard