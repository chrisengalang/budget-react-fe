import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row, Stack } from 'react-bootstrap'
import accounts from '../../assets/mock/accounts.json'
import { useEffect, useState } from 'react'
import AddAccountModal from './AddAccountModal'

const Accounts = () => {

  const [accountList, setAccountList] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

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
                    <Card>
                      <CardBody>
                        <CardTitle>
                          {account.account_name}
                        </CardTitle>
                        <CardText>
                          {account.amount}
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })
            }
          </Row>
      </Container>
      <Container>
        <Button className='mb-4 w-100' size='lg' onClick={handleShowModal}>Add Account</Button>
      </Container>
      <AddAccountModal handleShowModal={handleShowModal} showModal={showModal} setAccountList={setAccountList} accountList={accountList}/>
    </Container>
  )
}

export default Accounts