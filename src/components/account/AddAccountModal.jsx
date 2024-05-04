import { Button, FormControl, Modal, ModalBody, ModalHeader, ModalTitle, Stack } from "react-bootstrap"
import { useState } from "react"
import { useAuth } from "../../context/authentication/AuthProvider"
import { createAccount } from "../../service/database/accounts"

const AddAccountModal = ({showModal, handleShowModal, setAccountList, accountList}) => {

  const [accountName, setAccountName] = useState('')
  const [amount, setAmount] = useState(0)
  const { currentUser } = useAuth()

  const handleAddAccount = () => {
    createAccount({accountName: accountName, amount: amount}, currentUser.auth.uid).then((account) => {
      console.log(account)
      setAccountName('')
      setAmount(0)
      handleShowModal()
    })
  }

  return (
    <Modal show={showModal} onHide={handleShowModal}>
      <ModalHeader closeButton>
        <ModalTitle>Add Account</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormControl className="mb-4" type="text" placeholder="Account Name" onChange={(e) => setAccountName(e.target.value)} />
        <FormControl className="mb-4" type="text" placeholder="Initial Value" onChange={(e) => setAmount(e.target.value)} />
        <Stack className="justify-content-center" direction="horizontal" gap={2}>
          <Button onClick={handleAddAccount}>Add</Button>
          <Button onClick={handleShowModal}>Cancel</Button>
        </Stack>
      </ModalBody>
    </Modal>
  )
}

export default AddAccountModal