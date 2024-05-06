import {useState} from "react";
import {Button, Modal, Stack, Form} from "react-bootstrap";
import {createAccount, getAccountById} from "../../service/database/AccountRepository.ts";
import {useAuth} from "../../service/context/AuthProvider.tsx";
import {Account} from "../../model/BudgetTypes.ts";

type AccountAddModalProps = {
  showAccountAddModal: boolean,
  setShowAccountAddModal: (showAccountAddModal: boolean) => void,
  setAccounts: (accounts: Account[]) => void,
  accounts: Account[]
}

const AccountAddModal = ({showAccountAddModal, setShowAccountAddModal, accounts, setAccounts} : AccountAddModalProps) => {

  const [name, setName] = useState('')
  const [balance, setBalance] = useState(0)
  const { user } = useAuth()


  const handleAddAccount = async () => {
    const userId : string | undefined = user?.id
    const accountRef = await createAccount({name, balance, userId})
    const account : Account = await getAccountById(accountRef.id)
    setAccounts([account, ...accounts])
    setName('')
    setBalance(0)
    setShowAccountAddModal(false)
  }

  return (
    <Modal show={showAccountAddModal}>
      <Modal.Header>Add Account</Modal.Header>
      <Modal.Body>
        <Form.Control className="mb-4" type="text" placeholder="Account Name" onChange={(e) => setName(e.target.value)} />
        <Form.Control className="mb-4" type="text" placeholder="Initial Value" onChange={(e) => setBalance(parseFloat(e.target.value))} />
        <Stack className="justify-content-center" direction="horizontal" gap={2}>
          <Button onClick={handleAddAccount}>Add</Button>
          <Button onClick={() => setShowAccountAddModal}>Cancel</Button>
        </Stack>
      </Modal.Body>
    </Modal>
  )
}

export default AccountAddModal