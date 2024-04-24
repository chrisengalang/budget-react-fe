import { useState } from "react"
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap"
import UpdateAccountModal from "./UpdateAccountModal"


const Account = ({account}) => {

  const [accountInfo, setAccountInfo] = useState(account)
  const [showUpdateModal, setShowUpdateModal] = useState(false)

  const handleShowUpdateModal = () => setShowUpdateModal(!showUpdateModal)

  return (
    <Card>
      <CardBody onClick={handleShowUpdateModal}>
        <CardTitle>
          {accountInfo.account_name}
        </CardTitle>
        <CardText>
          {accountInfo.amount}
        </CardText>
      </CardBody>
      <UpdateAccountModal account={accountInfo} showModal={showUpdateModal} handleShowModal={setShowUpdateModal} />
    </Card>
  )
}

export default Account