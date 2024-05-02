import { useState } from "react"
import { Button, FormControl, Modal, ModalBody, ModalHeader, ModalTitle, Stack } from "react-bootstrap"

const UpdateAccountModal = ({showModal, handleShowModal, account}) => {

  const [accountName, setAccountName] = useState(account.account_name)
  const [initialValue, setInitialValue] = useState(account.amount)

  const tempAccountName = accountName
  const tempInitialValue = initialValue

  const handleAccountUpdate = () => {
    account.account_name = accountName
    account.amount = parseFloat(initialValue).toFixed(2)
    handleShowModal()
  }

  return (
    <Modal show={showModal} onHide={handleShowModal}>
      <ModalHeader closeButton>
        <ModalTitle>Update Account</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormControl className="mb-4" type="text" placeholder="Account Name" value={tempAccountName} onChange={(e) => setAccountName(e.target.value)} />
        <FormControl className="mb-4" type="text" placeholder="Initial Value" value={tempInitialValue} onChange={(e) => setInitialValue(e.target.value)} />
        <Stack className="justify-content-center" direction="horizontal" gap={2}>
          <Button onClick={handleAccountUpdate}>Update</Button>
          <Button onClick={handleShowModal}>Cancel</Button>
        </Stack>
      </ModalBody>
    </Modal>
  )
}

export default UpdateAccountModal