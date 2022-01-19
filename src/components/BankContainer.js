import React, { useState } from 'react';
import { Radio, RadioGroup } from 'rsuite';


const BankContainer = () => {
  const [activeCategory, setActiveCategory] = useState({
    category: 'All'
  })
  const styles = {
    table: {
      fontFamily: 'Quicksand, sans-serif',
      borderCollapse: 'collapse',
      width: '99%',
      fontSize: "20px",
      td: {
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '10px',
      },
      th: {
        border: '1px solid #dddddd',
        padding: '10px',
        textAlign: 'center',
      },
      tr: {
        borderRadius: '10px',
      }
    },
  }

  const state = {
    transactions: [
      {
        id: 1,
        posted_at: '2017-02-28 11:00:00',
        description: 'Leather Pants, Gap co.',
        category: 'Fashion',
        amount: -20000
      },
      {
        id: 2,
        posted_at: '2017-02-29 10:30:00',
        description: "Paycheck from Bob's Burgers",
        category: 'Income',
        amount: 100000
      },
      {
        id: 3,
        posted_at: '2017-05-24 10:53:00',
        description:
          "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
        category: 'Entertainment',
        amount: -1498
      },
      {
        id: 4,
        posted_at: '2017-05-24 08:52:00',
        description: "Medium Iced Cold Brew, Gregory's Coffee",
        category: 'Food',
        amount: -365
      }
    ],
    activeCategory: 'All'
  }

  const filteredTransactions = state.transactions.filter(transaction => transaction.category === activeCategory.category);

  console.log(filteredTransactions);

  const handleChange = (name, value) => {
    setActiveCategory({
      [name]: value
    });
    console.log(name, value);
  }

  return (
    <React.Fragment>
      <RadioGroup
        name="category"
        value={activeCategory.category}
        onChange={value => handleChange('category', value)}
      >
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <Radio checked={activeCategory.category === 'All' ? true : false} value="All">All</Radio>
          <Radio checked={activeCategory.category === 'Entertainment' ? true : false} value="Entertainment">Entertainment</Radio>
          <Radio checked={activeCategory.category === 'Income' ? true : false} value="Income">Income</Radio>
          <Radio checked={activeCategory.category === 'Food' ? true : false} value="Food">Food</Radio>
          <Radio checked={activeCategory.category === 'Fashion' ? true : false} value="Fashion">Fashion</Radio>
          <Radio checked={activeCategory.category === 'Gift' ? true : false} value="Gift">Gift</Radio>
          <Radio checked={activeCategory.category === 'ATM' ? true : false} value="ATM">ATM</Radio>
          <Radio checked={activeCategory.category === 'Transportation' ? true : false} value="Transportation">Transportation</Radio>
          <Radio checked={activeCategory.category === 'Housing' ? true : false} value="Housing">Housing</Radio>
          <Radio checked={activeCategory.category === 'Misery' ? true : false} value="Misery">Misery</Radio>
        </div>
      </RadioGroup>
      <table style={styles.table}>
        <tr style={styles.table.tr}>
          <th style={styles.table.th}>Posted At</th>
          <th style={styles.table.th}>Description</th>
          <th style={styles.table.th}>Category</th>
          <th style={styles.table.th}>Amount</th>
        </tr>
        {filteredTransactions && (
          filteredTransactions.map((eachTransaction) => (
            <tr key={eachTransaction.id}>
              <td style={styles.table.td}>{eachTransaction.posted_at}</td>
              <td style={styles.table.td}>{eachTransaction.description}</td>
              <td style={styles.table.td}>{eachTransaction.category}</td>
              <td style={styles.table.td}>{eachTransaction.amount}</td>
            </tr>
          ))
        )}
        {activeCategory.category === "All" && (
          state.transactions.map((eachTransaction) => (
            <tr key={eachTransaction.id}>
              <td style={styles.table.td}>{eachTransaction.posted_at}</td>
              <td style={styles.table.td}>{eachTransaction.description}</td>
              <td style={styles.table.td}>{eachTransaction.category}</td>
              <td style={styles.table.td}>{eachTransaction.amount}</td>
            </tr>
          ))
        )}
      </table>
    </React.Fragment>
  )
}

export default BankContainer;
