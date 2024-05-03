import { Button, Col, Container, Row } from 'react-bootstrap'
import accounts from '../../assets/mock/accounts.json'
import { useEffect, useState } from 'react'
import AddAccountModal from './AddAccountModal'
import Account from './Account'
import { useAuth } from '../../context/authentication/AuthProvider'
import { useNavigate } from 'react-router-dom'

const AccountsPage = () => {

  const [accountList, setAccountList] = useState([])
  const [showAddAccountModal, setShowAddAccountModal] = useState(false)
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleAddAccountModal = () => setShowAddAccountModal(!showAddAccountModal)

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
    setAccountList(accounts)
  }, [])

  return (
    <Container>
      <h2 className='text-center mb-4'>Hi {currentUser.name}</h2>
      <Container>
          <Row xs={1} sm={2} md={3}>
            {
              accountList.map((account) => {
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
      <AddAccountModal handleShowModal={handleAddAccountModal} showModal={showAddAccountModal} setAccountList={setAccountList} accountList={accountList}/>
    </Container>
  )
}

export default AccountsPage