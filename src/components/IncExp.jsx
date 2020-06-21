import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncExp = () => {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const Expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${incomes.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${Math.abs(Expense)}</p>
      </div>
    </div>
  );
};
