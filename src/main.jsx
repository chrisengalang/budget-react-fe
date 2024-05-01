import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AccountsPage from './pages/AccountsPage.jsx'
import TransactionsPage from './pages/TransactionsPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AccountsPage />
      },
      {
        path: '/accounts/:id',
        element: <AccountsPage />
      },
      {
        path: '/transactions',
        element: <TransactionsPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
