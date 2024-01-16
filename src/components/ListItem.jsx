import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function ListItem({ transaction }) {
  const { deleteTransaction, editTransaction } = useContext(ExpenseContext);

  return (
    <li className="list-group-item shadow-sm p-3 my-1">
      <h1 className="display-6">
        {transaction.text} : {transaction.amount}
      </h1>
      <span className="float-end">
        <button
          className="btn btn-warning btn-sm mx-2"
          onClick={() => editTransaction(transaction)}>
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTransaction(transaction.id)}>
          Delete
        </button>
      </span>
    </li>
  );
}

export default ListItem;
