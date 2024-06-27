import { Button, Container, Form, Row } from "react-bootstrap"
import { users } from "../../mock/mockUsers"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate  = useNavigate()

  const login = (e: React.FormEvent) => {
    e.preventDefault()

    // Retrieve login details
    const user = users.find(user => user.username === username && user.password === password)
    
    // Redirect to dashboard with the details if user exists
    if (user) {
      setError(false)
      navigate('/dashboard')
    } else {
      setError(true)
    }
  }
  
  return (
    <Container className='vh-100 d-flex justify-content-center align-items-center'>
      <Row>
        <h1 className='display-4 text-center mb-3'>Budget App</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" className='text-budget-primary' onChange={e => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='text-budget-primary' onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          { error ?  
            <Form.Group className="mb-3 text-center" controlId="formBasicError">
              <Form.Text className="text-danger">Invalid username and/or password.</Form.Text>
            </Form.Group>
            : <></>
          }
          <Form.Group className="mb-3" controlId="formBasicSubmit">
            <Button type="submit" className='w-100 button-budget-primary' onClick={login}>
              Sign in
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formBasicRegistration">
            <Form.Text>No account yet? <a href='/registration'>Register</a></Form.Text>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  )
}

export default Login