import {Button, Col, Container, Row} from "react-bootstrap";
import {getUserSession} from "../../service/session/SessionService.ts";
import {useEffect, useState} from "react";
import {useAuth} from "../../service/context/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {Account, User} from "../../model/BudgetTypes.ts";
import {getAccountsByUserId} from "../../service/database/AccountRepository.ts";
import AccountCard from "../account/AccountCard.tsx";
import AccountAddModal from "../account/AccountAddModal.tsx";

const Dashboard = () => {

  const [accounts, setAccounts] = useState<Account[]>([])
  const [showAccountAddModal, setShowAccountAddModal] = useState(false)
  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    getUserSession().then((userSession: User | null) => {
      if (!user && !userSession) {
        navigate('/')
      } else {
        getAccountsByUserId(userSession!.id).then((accounts: Account[]) => {
          setAccounts(accounts)
        })
      }
    })
  }, []);

  return (
    <Container>
      <h2 className='text-center'>Hi {user?.name}</h2>
      <Container>
        <Row xs={1} sm={2} md={3}>
          {
            accounts.map((account: Account) => {
              return <Col key={account.id} className='mb-4'>
                <AccountCard key={account.id} account={account}/>
              </Col>
            })
          }
        </Row>
      </Container>
      <Container>
        <Button className='mb-4 w-100' size='sm' onClick={() => setShowAccountAddModal(true)}>Add Account</Button>
      </Container>
      <AccountAddModal
        showAccountAddModal={showAccountAddModal}
        setShowAccountAddModal={setShowAccountAddModal}
        setAccounts={setAccounts}
        accounts={accounts} />
    </Container>
  )
}

export default Dashboard