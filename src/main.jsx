import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccountsPage from "./components/account/AccountsPage.jsx";
import TransactionsPage from "./components/transaction/TransactionsPage.jsx";
import LoginPage from "./components/authentication/LoginPage.jsx";
import RegisterPage from "./components/authentication/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegisterPage />,
      },
      {
        path: "/accounts/:id",
        element: <AccountsPage />,
      },
      {
        path: "/transactions",
        element: <TransactionsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
