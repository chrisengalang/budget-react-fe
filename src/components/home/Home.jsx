import {Container} from "react-bootstrap";
import Navigation from "../navigation/Navigation.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
  return (
      <Container>
        hello
        <Navigation />
        <Outlet />
      </Container>
  )
}

export default Home