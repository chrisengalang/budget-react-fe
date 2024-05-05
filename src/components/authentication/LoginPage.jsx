import {  useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useAuth } from "../../context/authentication/AuthProvider"
import { auth } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom"
import { doSignInWithEmailAndPassword } from "../../service/authentication/authentication"
import { getUser } from "../../service/database/user"
import { saveUserSession } from "../../service/session/session"

const LoginPage = ({LoginService}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const { setUserLoading, setCurrentUser, currentUser } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      setUserLoading(true)
      const user = await doSignInWithEmailAndPassword(email, password).then(() => {
        setIsSigningIn(false)
        return auth.currentUser
      }).catch((error) => {
        console.log(error)
        setIsSigningIn(false)
      })
      console.log(user)
      await getUser(user.uid).then((data) => {
        console.log(data)
        const userObj = {
          auth: user,
          name: data.data().name
        }
        setCurrentUser(userObj)
        saveUserSession(userObj)
      })

      navigate('/home')
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
          <Button variant="primary" type="submit" onClick={onSubmit} disabled={isSigningIn}>
            { isSigningIn ? 'Signing In...' : 'Sign In' }
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default LoginPage