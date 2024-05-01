import { Link, Outlet } from 'react-router-dom'
import './App.css'
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
