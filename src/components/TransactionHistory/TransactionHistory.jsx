import css from './Transactions.module.css'; 
import UpperCaseFirstLetter from './TransactionFirstLetterUpper';

function TransactionHistory({ list }) {
    return (
      <table className={css.transactionTable}>
        <thead>
          <tr className={css.typesMore}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody className={css.list}>
          {list.map((item, index) => (
            <tr key={item.id || index} className={index % 2 === 0 ? '' : css.backNotWhite}>
              <td className= {css.item}>{UpperCaseFirstLetter(item.type)}</td>
              <td className= {css.item}>{item.amount}</td>
              <td className= {css.item}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

export default TransactionHistory;
