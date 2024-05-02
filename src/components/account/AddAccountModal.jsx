import { Button, FormControl, FormText, Modal, ModalBody, ModalHeader, ModalTitle, Stack } from "react-bootstrap"
import { useState } from "react"

const AddAccountModal = ({showModal, handleShowModal, setAccountList, accountList}) => {

  const [accountName, setAccountName] = useState('')
  const [initialValue, setInitialValue] = useState(0)

  const handleAddAccount = () => {
    setAccountList([...accountList, {
      id: accountList.length + 1,
      account_name: accountName,
      amount: parseFloat(initialValue).toFixed(2)
    }])
    setAccountName('')
    setInitialValue(0)
    handleShowModal()
  }

  return (
    <Modal show={showModal} onHide={handleShowModal}>
      <ModalHeader closeButton>
        <ModalTitle>Add Account</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormControl className="mb-4" type="text" placeholder="Account Name" onChange={(e) => setAccountName(e.target.value)} />
        <FormControl className="mb-4" type="text" placeholder="Initial Value" onChange={(e) => setInitialValue(e.target.value)} />
        <Stack className="justify-content-center" direction="horizontal" gap={2}>
          <Button onClick={handleAddAccount}>Add</Button>
          <Button onClick={handleShowModal}>Cancel</Button>
        </Stack>
      </ModalBody>
    </Modal>
  )
}

export default AddAccountModal