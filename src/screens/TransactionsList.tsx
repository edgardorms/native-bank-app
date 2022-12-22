import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Transaction } from "../types/models";

const TransactionsList = (props: { transactions: Transaction[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de transacciones</Text>
      {props.transactions.map((transaction) => (
        <View style={styles.transactionContainer} key={transaction.type}>
          <Text style={styles.transactionType}>{transaction.type}:</Text>
          <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          {transaction.account && (
            <Text style={styles.transactionAccount}>{transaction.account}</Text>
          )}
          {transaction.fromAccount && (
            <Text style={styles.transactionAccount}>
              De: {transaction.fromAccount}
            </Text>
          )}
          {transaction.toAccount && (
            <Text style={styles.transactionAccount}>
              A: {transaction.toAccount}
            </Text>
          )}
        </View>
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

export default TransactionsList;