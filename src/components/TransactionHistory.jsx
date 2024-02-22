import './Transactions.css'; // Make sure you have the CSS file properly imported
import UpperCaseFirst from './FirstLetterUp';

function TransactionHistory({ list }) {
    return (
      <table className='transaction-table'>
        <thead>
          <tr className='types-more'>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody className="list">
          {list.map((item, index) => (
            <tr key={item.id || index} className={index % 2 === 0 ? 'list-item' : 'list-item back-not-white'}>
              <td className="item item-type">{UpperCaseFirst(item.type)}</td>
              <td className="item item-amount">{item.amount}</td>
              <td className="item item-currency">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default TransactionHistory;
