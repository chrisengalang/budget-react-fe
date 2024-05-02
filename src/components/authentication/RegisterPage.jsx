import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { doCreateUserWithEmailAndPassword } from "../../firebase/authentication";
import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match')
    } else {
      await doCreateUserWithEmailAndPassword(email, password).then(() => {
        const currentUser = auth.currentUser
        setErrorMessage('')
        setDoc(doc(db, "users", currentUser.uid), {
          email: email,
          uid: currentUser.uid
        })
      }).catch((error) => {
        setErrorMessage(error.message)
      })
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