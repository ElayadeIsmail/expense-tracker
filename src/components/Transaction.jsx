import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import classnames from "classnames";

const Transaction = ({ transaction: { text, amount, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={classnames({ minus: amount < 0, plus: amount > 0 })}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className='delete-btn'>
        x
      </button>
    </li>
  );
};

export default Transaction;
