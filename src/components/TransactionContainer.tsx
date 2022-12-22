import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Transaction } from "../types/models";

const Transfer = (props: Transaction) => {
  return (
    <View style={styles.transactionContainer}>
      <Text style={styles.transactionType}>{props.type}:</Text>
      <Text style={styles.transactionAmount}>{props.amount}</Text>
      {props.account && (
        <Text style={styles.transactionAccount}>{props.account}</Text>
      )}
      {props.fromAccount && (
        <Text style={styles.transactionAccount}>From: {props.fromAccount}</Text>
      )}
      {props.toAccount && (
        <Text style={styles.transactionAccount}>To: {props.toAccount}</Text>
      )}
    </View>
  );
};

const TransactionContainer = (props: { transactions: Transaction[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions List</Text>
      {props.transactions.map((transaction) => (
        <Transfer
          key={transaction.type}
          type={transaction.type}
          amount={transaction.amount}
          account={transaction.account}
          fromAccount={transaction.fromAccount}
          toAccount={transaction.toAccount}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  transactionType: {
    fontSize: 18,
  },
  transactionAmount: {
    fontSize: 18,
    marginLeft: 8,
  },
  transactionAccount: {
    fontSize: 18,
    marginLeft: 8,
    color: "gray",
  },
});

export default TransactionContainer;
