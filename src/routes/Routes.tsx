import App from "../App";
import Login from "../component/authentication/Login";
import Registration from "../component/authentication/Registration";

const routes = [
  {
    path: "/",
    name: "Home",
    element: <App />,
    children: [
      {
        path: "/",
        name: "Login",
        element: <Login />
      },
      {
        path: "/registration",
        name: "Registration",
        element: <Registration />
      }
    ]
  }
]

export {
  routes
}