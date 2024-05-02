import { getDoc, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useAuth } from "../../context/authentication/AuthProvider"
import { doSignInWithEmailAndPassword } from "../../firebase/authentication"
import { auth } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const { currentUser, setCurrentUser } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate('/home')
    }
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      await doSignInWithEmailAndPassword(email, password).then(() => {
        setIsSigningIn(false)
        setCurrentUser(auth.currentUser)
        console.log(currentUser)
      }).catch((error) => {
        console.log(error)
        setIsSigningIn(false)
      })
    }
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