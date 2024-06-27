import { Button, Container, Form, Row } from "react-bootstrap"

const Registration = () => {
  return (
    <Container className='vh-100 d-flex justify-content-center pt-3'>
      <Row>
        <h1 className='display-6'>Registration</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-5" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" className='text-budget-primary' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubmit">
            <Button type="submit" className='w-100 button-budget-primary'>
              Register
            </Button>
          </Form.Group>
          <Form.Group className="mb-3 text-center" controlId="formBasicRegistration">
            <Form.Text>Already have an account? <a href='/'>Sign in</a></Form.Text>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  )
}

export default Registration