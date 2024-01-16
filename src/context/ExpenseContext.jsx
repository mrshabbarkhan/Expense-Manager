import { createContext, useReducer } from "react";
import ExpenseReducer from "./ExpenseReducer";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const initialState = {
    transactions: [
      { id: 1, text: "salary", amount: 5000 },
      { id: 2, text: "rent", amount: 3000 },
    ],
    edit: { transaction: {}, isEdit: false },
  };

  const [state, dispatch] = useReducer(ExpenseReducer, initialState);

  // Save
  const saveTransactions = (text, amount) => {
    dispatch({
      type: "SAVE",
      payload: {
        id: crypto.randomUUID(),
        text,
        amount: parseInt(amount),
      },
    });
  };

  // Delete
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  // Edit
  const editTransaction = (oldTransactions) => {
    dispatch({
      type: "EDIT",
      payload: oldTransactions,
    });
  };

  // Update
  const updateTransaction = (transaction) => {
    dispatch({
      type: "UPDATE",
      payload: transaction,
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        ...state,
        saveTransactions,
        deleteTransaction,
        editTransaction,
        updateTransaction,
      }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
