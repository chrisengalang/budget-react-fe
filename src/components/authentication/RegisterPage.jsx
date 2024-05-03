import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword, doSignOut } from "../../service/authentication/authentication";
import { addUser } from "../../service/database/user";

const RegisterPage = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isRegistering && password === confirmPassword) {
      setIsRegistering(true)
      const creation = await doCreateUserWithEmailAndPassword(email, password).then(async () => {
        return auth.currentUser
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
      await addUser(creation, name)
      doSignOut().then(() => {
        setIsRegistering(false)
        navigate('/')
      })
    } else {
      setErrorMessage('Passwords do not match')
    }
  }

  return (
    <Container>
      <h2 className="text-center mb-4">Register</h2>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
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
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text>Already have an account? <a href="/">Login</a></Form.Text>
          </Form.Group>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          <Button variant="primary" type="submit" onClick={onSubmit} disabled={isRegistering}>
            { isRegistering ? 'Registering...' : 'Register' }
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default RegisterPage