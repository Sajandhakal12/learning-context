import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpences = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+{income}$</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-{Math.abs(expense)}$</p>
      </div>
    </div>
  );
};
