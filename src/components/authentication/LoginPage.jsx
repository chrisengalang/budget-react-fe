import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"


const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    alert(`${email}, ${password}`)
  }

  return (
    <Container>
      <h2 className='text-center mb-4'>Login</h2>
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
          <Form.Group className="mb-3">
            <Form.Text>No account yet? <a href="/registration">Register</a></Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Sign in
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default LoginPage