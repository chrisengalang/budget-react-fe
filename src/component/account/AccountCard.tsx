import {Card} from "react-bootstrap";
import {Account} from "../../model/BudgetTypes.ts";

type AccountCardProps = {
  account: Account
}

const AccountCard = ({account} : AccountCardProps) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{account.name}</Card.Title>
        <Card.Text>{account.balance}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AccountCard