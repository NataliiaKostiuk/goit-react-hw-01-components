import css from './transactions.module.css'
export const Transactions = (props) => {
    return <table className={css.transaction}>
  <thead className={css.title}>
    <tr>
      <th className={css.itemtitle}>Type</th>
      <th className={css.itemtitle}>Amount</th>
      <th className={css.itemtitle}>Currency</th>
    </tr>
     {props.transactions.map(({ id, type, amount, currency }) => {
           return <tbody className={css.tablerow} key ={id}>
    <tr className={css.tablerow} key ={id}>
     <td className={css.itemtable}>{type}</td>
     <td className={css.itemtable}>{amount}</td>
     <td className={css.itemtable}>{currency}</td>
    </tr>
  </tbody>
       })         
     }       
  </thead>

 
</table>
}
 