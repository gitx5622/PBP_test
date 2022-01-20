import React, {useMemo, useState} from 'react';
import { Radio, RadioGroup } from 'rsuite';
import transactionData from './transactions_data.json';
import TransanctionCard from "./transanction_card";
import '../../styles/bankContainer.scss';

const BankContainer = () => {
  const [activeCategory, setActiveCategory] = useState({
    category: 'All',
  })


  const filteredTransactions = useMemo(() =>
      transactionData.filter(transaction => transaction.category === activeCategory.category),
      [activeCategory.category]);

  const handleChange = (name, value) => {
    setActiveCategory({
      [name]: value
    });
  }
  return (
    <React.Fragment>
      <RadioGroup
        name="category"
        value={activeCategory.category}
        onChange={value => handleChange('category', value)}
      >
        <div className="radioButtons">
          <Radio checked={activeCategory.category === 'All'} value="All">All</Radio>
          <Radio checked={activeCategory.category === 'Entertainment'} value="Entertainment">Entertainment</Radio>
          <Radio checked={activeCategory.category === 'Income'} value="Income">Income</Radio>
          <Radio checked={activeCategory.category === 'Food'} value="Food">Food</Radio>
          <Radio checked={activeCategory.category === 'Fashion'} value="Fashion">Fashion</Radio>
          <Radio checked={activeCategory.category === 'Gift'} value="Gift">Gift</Radio>
          <Radio checked={activeCategory.category === 'ATM'} value="ATM">ATM</Radio>
          <Radio checked={activeCategory.category === 'Transportation'} value="Transportation">Transportation</Radio>
          <Radio checked={activeCategory.category === 'Housing'} value="Housing">Housing</Radio>
          <Radio checked={activeCategory.category === 'Misery'} value="Misery">Misery</Radio>
        </div>
      </RadioGroup>
      <TransanctionCard
        filteredTransactions={filteredTransactions}
        activeCategory={activeCategory}
        transactionData={transactionData}
      />
    </React.Fragment>
  )
}

export default BankContainer;
