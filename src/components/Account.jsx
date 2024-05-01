import { useState } from "react"
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap"

const Account = ({account}) => {
  const [accountInfo] = useState(account)
  return (
    <Card>
      <CardBody>
        <CardTitle>
          {accountInfo.account_name}
        </CardTitle>
        <CardText>
          {accountInfo.amount}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default Account