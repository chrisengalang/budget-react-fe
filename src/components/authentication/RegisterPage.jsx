import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      console.log(email, password)
    }
  }

  return (
    <Container>
      <h2 className="text-center mb-4">Register</h2>
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
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text>Already have an account? <a href="/">Login</a></Form.Text>
          </Form.Group>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Register
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default RegisterPage