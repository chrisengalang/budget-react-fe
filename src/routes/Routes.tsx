import Login from "../components/auth/Login";
import Registration from "../components/auth/Registration";
import Dashboard from "../components/dashboard/Dashboard";

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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard Home',
        element: <h1>Dashboard Home</h1>
      }
    ]
  }
]

export {
  routes
}