import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Accounts from './pages/Accounts'
import { Nav } from 'react-bootstrap'
import Navigation from './components/Navigation'

const App = () => {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
    </div>
  )
}

export default App
