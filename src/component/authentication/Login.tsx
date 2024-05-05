import React, { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { LoginRequest, User } from "../../model/BudgetTypes"
import { login } from "../../service/authentication/AuthenticationService"
import {Link} from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSigningIn, setIsSigningIn] = useState(false)

  const handleSignIn = async (e:React.FormEvent) => {
    e.preventDefault()
    setIsSigningIn(true)
    const loginRequest: LoginRequest = {
      email,
      password
    }
    const user : User = await login(loginRequest)
    console.log(user)
  }

  return (
    <Container>
      <h2 className='text-center'>Login</h2>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formRegistration">
            <Form.Text>No account yet? <Link to='/registration'>Register</Link></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSignIn} disabled={isSigningIn}>
            {isSigningIn ? "Signing in..." : "Sign in"}
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Login
