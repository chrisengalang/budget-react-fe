import { Card, CardBody, CardHeader, CardText, CardTitle, Col, Container, Row, Stack } from 'react-bootstrap'
import accounts from '../../assets/mock/accounts.json'

const Accounts = () => {

  return (
    <Container>
      <h1 className='text-center my-4'>Accounts</h1>
      <Container>
          <Row xs={1} sm={2} md={3}>
            {
              accounts.map((account) => {
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
    </Container>
  )
}

export default Accounts