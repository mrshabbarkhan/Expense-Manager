import React from "react";
import Navbar from "./components/Navbar";
import BalanceSecction from "./components/BalanceSecction";
import AccountSection from "./components/AccountSection";
import ListGroup from "./components/ListGroup";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <Navbar />
      <div className="conatiner p-5">
        <BalanceSecction />
        <AccountSection />
        <ListGroup />
      </div>
    </ExpenseProvider>
  );
}

export default App;
