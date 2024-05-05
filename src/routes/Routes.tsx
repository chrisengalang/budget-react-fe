import App from "../App";
import Login from "../component/authentication/Login";
import Registration from "../component/authentication/Registration";
import Dashboard from "../component/dashboard/Dashboard.tsx";

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
      },
      {
        path: "/dashboard",
        name: "Dashboard",
        element: <Dashboard />
      }
    ]
  }
]

export {
  routes
}