import React from "react";
import TransactionContainer from "../components/TransactionContainer";

const transactions = [
  {
    type: "deposit",
    amount: 500.0,
    account: "checking",
  },
  {
    type: "withdrawal",
    amount: 100.0,
    account: "savings",
  },
  {
    type: "transfer",
    amount: 200.0,
    fromAccount: "checking",
    toAccount: "savings",
  },
];

const TransactionsList = () => {
  return <TransactionContainer transactions={transactions} />;
};

export default TransactionsList;
