import { Button, Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import AddAccountModal from './AddAccountModal'
import Account from './Account'
import { useAuth } from '../../context/authentication/AuthProvider'
import { useNavigate } from 'react-router-dom'
import {getAccountsByUserId} from "../../service/database/accounts.js";

const AccountsPage = () => {

  const [accountList, setAccountList] = useState([])
  const [showAddAccountModal, setShowAddAccountModal] = useState(false)
  const { currentUser, setCurrentUser, setUserLoading } = useAuth();
  const navigate = useNavigate();

  const handleAddAccountModal = () => setShowAddAccountModal(!showAddAccountModal)
  const getAccounts = async (uid) => {
    const accountsCollection = await getAccountsByUserId(uid)
    const accountsList = []
    accountsCollection.forEach((doc) => {
      accountsList.push({key: doc.id, ...doc.data()})
    })
    setAccountList(accountsList)
  }

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem('currentUser'))

    if (!sessionUser) {
      navigate('/')
    } else {
      setCurrentUser(sessionUser)
    }
    getAccounts(sessionUser.auth.uid)
    setUserLoading(false)
  }, [])

  return (
    <Container>
      <h2 className='text-center mb-4'>Hi {currentUser.name}</h2>
      <Container>
          <Row xs={1} sm={2} md={3}>
            {
              accountList && accountList.map((account) => {
                return (
                  <Col key={account.id} className='mb-4'>
                    <Account account={account} />
                  </Col>
                )
              })
            }
          </Row>
      </Container>
      <Container>
        <Button className='mb-4 w-100' size='lg' onClick={handleAddAccountModal}>Add Account</Button>
      </Container>
      <AddAccountModal handleShowModal={handleAddAccountModal} showModal={showAddAccountModal} accountList={accountList} setAccountList={setAccountList}/>
    </Container>
  )
}

export default AccountsPage