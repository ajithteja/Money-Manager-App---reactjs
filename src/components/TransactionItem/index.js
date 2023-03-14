import './index.css'

const TransactionItem = props => {
  const {transactionHistory, onDeleteItem} = props
  const {id, title, amount, type} = transactionHistory
  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="history-list-container history-sub history-border">
      <p className="history-title title-text">{title}</p>
      <p className="title-text history-title history-amount">RS {amount}</p>
      <p className="title-text history-title">{type}</p>
      <div className="btn-container">
        <button
          data-testid="delete"
          onClick={onDelete}
          type="button"
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
