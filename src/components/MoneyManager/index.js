import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    transactionHistory: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
  }

  onAddTransaction = () => {
    const {title, amount, type} = this.state
    const newTrans = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (title.length !== 0 && amount.length !== 0) {
      this.setState(prevState => ({
        transactionHistory: [...prevState.transactionHistory, newTrans],
        title: '',
        amount: '',
      }))

      if (type === 'Income') {
        this.setState(prevState => ({
          income: prevState.income + parseInt(newTrans.amount),
        }))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses + parseInt(newTrans.amount),
        }))
      }
    }
  }

  onDeleteItem = id => {
    const {transactionHistory} = this.state
    const filteredList = transactionHistory.filter(
      eachItem => eachItem.id !== id,
    )
    const deletedLidt = transactionHistory.filter(
      eachItem => eachItem.id === id,
    )

    if (deletedLidt[0].type === 'Income') {
      this.setState(prevState => ({
        income: prevState.income - parseInt(deletedLidt[0].amount),
      }))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - parseInt(deletedLidt[0].amount),
      }))
    }

    this.setState({
      transactionHistory: filteredList,
    })
  }

  onDropDown = event => {
    if (event.target.value === 'INCOME') {
      this.setState({
        type: transactionTypeOptions[0].displayText,
      })
    } else {
      this.setState({
        type: transactionTypeOptions[1].displayText,
      })
    }
  }

  onTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  render() {
    const {
      income,
      expenses,
      transactionHistory,
      title,
      amount,
      type,
    } = this.state

    return (
      <div className="bg-container">
        <div className="header">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your{' '}
            <span className="style-description">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} />
        <div className="transaction-history">
          <div className="transactions-container">
            <h1 className="heading title-head">Add Transaction</h1>
            <label htmlFor="title" className="title-text">
              TITLE
            </label>
            <br />
            <input
              onChange={this.onTitle}
              type="text"
              id="title"
              className="title-input"
              placeholder="TITLE"
              value={title}
            />
            <br />
            <label htmlFor="amount" className="title-text">
              AMOUNT
            </label>
            <br />
            <input
              onChange={this.onAmount}
              type="text"
              id="amount"
              className="title-input"
              placeholder="AMOUNT"
              value={amount}
            />
            <br />
            <label htmlFor="title" className="title-text">
              TYPE
            </label>
            <br />
            <select onChange={this.onDropDown} className="title-input">
              {transactionTypeOptions.map(eachItem => (
                <option
                  id={eachItem.optionId}
                  key={eachItem.optionId}
                  value={eachItem.optionId}
                >
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <br />
            <button
              onClick={this.onAddTransaction}
              type="button"
              className="add-btn"
            >
              Add
            </button>
          </div>
          <div className="history-container">
            <h1 className="heading title-head">History</h1>
            <div className="history-sub">
              <p className="history-title title-text">Title</p>
              <p className="title-text history-title history-amount">Amount</p>
              <p className="title-text history-title history-type">Type</p>
            </div>
            <ul className="history-ul-container">
              {transactionHistory.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  onDeleteItem={this.onDeleteItem}
                  transactionHistory={eachItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
