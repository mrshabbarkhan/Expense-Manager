import React, { useContext } from "react";
import ListItem from "./ListItem";
import ExpenseContext from "../context/ExpenseContext";

function ListGroup() {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div className="my-2">
      <h2>Transactions :</h2>
      <ul className="list-group my-3">
        {transactions.map((transaction) => (
          <ListItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
