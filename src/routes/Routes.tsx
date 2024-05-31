import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Login />
  },
  {
    path: '/registration',
    name: 'Registration',
    element: <Registration />
  }
]

export {
  routes
}