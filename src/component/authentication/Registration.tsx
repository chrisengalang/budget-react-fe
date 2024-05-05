import {Button, Container, Form} from "react-bootstrap";
import React, {useState} from "react";
import {logout, register} from "../../service/authentication/AuthenticationService.ts";
import {RegistrationRequest} from "../../model/BudgetTypes.ts";
import {Link, useNavigate} from "react-router-dom";

const Registration = () => {

  const [isRegistering, setIsRegistering] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleRegistration = async (e:React.FormEvent) => {
    e.preventDefault()
    setIsRegistering(true)

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
      setIsRegistering(false)
    } else {
      const registrationRequest: RegistrationRequest = {
        name,
        email,
        password
      }
      await register(registrationRequest)
      await logout()
      navigate('/')
    }
  }

  return (
      <Container>
        <h2 className="text-center">Registration</h2>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegistration">
              <Form.Text>Already have an account? <Link to='/'>Sign in</Link></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formErrorMessage">
              <Form.Text className="text-danger">{errorMessage}</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegistration} disabled={isRegistering}>
              {isRegistering ? "Registering..." : "Register"}
            </Button>
          </Form>
        </Container>
      </Container>
  )
}

export default Registration