import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import Chart from "./Charts";
function BalanceSecction() {
  const { transactions, saveTransactions, edit, updateTransaction } =
    useContext(ExpenseContext);

  const Balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTransaction({
        id: edit.transaction.id,
        text: text,
        amount: +amount,
      });
    } else {
      saveTransactions(text, amount);
    }
    setAmount("");
    setText("");
  };

  useEffect(() => {
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <div className="balance">
      <div className="row">
        <div className="col-md-12 col-sm-12 ">
          <div className="card p-4 my-2 w-100">
            <form onSubmit={handleSubmit}>
              <input
                required
                type="number"
                className="form-control my-2"
                placeholder="Enter Amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
              <input
                required
                type="text"
                className="form-control my-2"
                placeholder="Enter Expense"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn-info w-100 text-light">Save</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-5 col-sm-12"
            data-aos="fade-right"
            data-aos-delay="500">
            <div className="card p-4 bg-info text-light">
              <h1 className="display-5 card-title">Balance : </h1>
              <h1 className="display-4 card-title">{Balance}</h1>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 my-3 chart">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSecction;
