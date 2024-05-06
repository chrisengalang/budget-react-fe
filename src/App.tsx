import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Navigation from "./component/navigation/Navigation.tsx";
import {AuthProvider} from "./service/context/AuthProvider.tsx";

function App() {

  return (
    <AuthProvider>
      <Container>
        <Navigation />
        <Outlet />
      </Container>
    </AuthProvider>
  )
}

export default App
