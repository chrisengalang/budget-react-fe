import { Button, Container, Form, Row } from "react-bootstrap"

const Login = () => {
  return (
    <Container className='vh-100 d-flex justify-content-center align-items-center'>
      <Row>
        <h1 className='display-4 text-center mb-3'>Budget App</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formBasicRegistration">
            <Form.Text>No account yet? <a href='/registration'>Register</a></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubmit">
            <Button type="submit" className='w-100 button-budget-primary'>
              Sign in
            </Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  )
}

export default Login