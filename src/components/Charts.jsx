import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import ExpenseContext from "../context/ExpenseContext";

const Chart = () => {
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

  const Balance = transactions.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const data = [
    { name: "Start", uv: 0, pv: 1000, amt: 2400 },
    { name: "Income", uv: income, pv: 5000, amt: 2400 },
    { name: "Expense", uv: expense, pv: 2000, amt: 2400 },
    { name: "Balance", uv: Balance, pv: 15000, amt: 2400 },
  ];

  return (
    <>
      {/* <div className="chart" data-aos="fade-left" data-aos-delay="500">  */}

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={630}
          height={260}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="red" />
          <Line type="monotone" dataKey="uv" stroke="#31D2F2" />
        </LineChart>
      </ResponsiveContainer>

      {/* </div> */}
    </>
  );
};

export default Chart;
