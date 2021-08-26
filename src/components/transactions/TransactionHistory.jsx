import styles from './TransactionHistory.modules.css';

const TransactionHistory = ({transactions}) => {
  return (
    <div className="container">
      <table className={styles.tableContainer}>
        <thead>
          <tr className={styles.row}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction =>(
            <tr className={styles.row} key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  )
}


export default TransactionHistory;