import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <ul className="ul-list-container">
      <li className="list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon-img"
        />
        <div className="text-container">
          <p className="text">Your Balance</p>
          <p data-testid="balanceAmount" className="rupee">
            RS {income - expenses}
          </p>
        </div>
      </li>
      <li className="list-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon-img"
        />
        <div className="text-container">
          <p className="text">Your Income</p>
          <p className="rupee" data-testid="incomeAmount">
            RS {income}
          </p>
        </div>
      </li>
      <li className="list-container list-container-last">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon-img"
        />
        <div className="text-container">
          <p className="text">Your Expenses</p>
          <p data-testid="expensesAmount" className="rupee">
            RS {expenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
