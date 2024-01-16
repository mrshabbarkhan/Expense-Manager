import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

function AccountSection() {
  const { transactions } = useContext(ExpenseContext);

  const income = transactions
    .filter((item) => item.amount > 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  const expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  return (
    <div className="expense">
      <div className="row my-2">
        <div className="col-md-6 col-sm-12 my-2">
          <div className="card p-4 bg-info text-light">
            <h1 className="display-5 card-title">Total Expense : </h1>
            <h1 className="display-4 card-title">{expense}</h1>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="card p-4 bg-info text-light my-2">
            <h1 className="display-5 card-title ">Total Income : </h1>
            <h1 className="display-4 card-title">{income}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
