import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };

  return (
    <div>
      <h3>Add a Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter any text..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">
            Amoumt
            <br />
            (negative - expense,positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Add a transaction..."
          />
        </div>
        <div>
          <button className="btn">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};
