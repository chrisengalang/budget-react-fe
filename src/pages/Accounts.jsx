import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'
import accounts from '../assets/mock/accounts.json'
import { useEffect, useState } from 'react'
import AddAccountModal from '../components/AddAccountModal'
import Account from '../components/Account'

const Accounts = () => {

  const [accountList, setAccountList] = useState([])
  const [showAddAccountModal, setShowAddAccountModal] = useState(false)

  const handleAddAccountModal = () => setShowAddAccountModal(!showAddAccountModal)

  useEffect(() => {
    setAccountList(accounts)
  }, [])

  return (
    <Container>
      <h1 className='text-center my-4'>Account Management</h1>
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

export default Accounts