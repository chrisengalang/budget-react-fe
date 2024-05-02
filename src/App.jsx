import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/navigation/Navigation'
import AuthProvider from './context/authentication/AuthProvider'

const App = () => {
  return (
    <AuthProvider>
      <div className="container">
        <Navigation />
        <Outlet />
      </div>
    </AuthProvider>
  )
}

export default App
