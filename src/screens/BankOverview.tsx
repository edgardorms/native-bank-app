import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { User } from "../types/models";

const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
  accounts: [
    {
      type: "checking",
      balance: 1000.5,
    },
    {
      type: "savings",
      balance: 2500.0,
    },
  ],
};

const BankOverview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AppBank</Text>
      <Text style={styles.subtitle}>Name: {user.name}</Text>
      <Text style={styles.subtitle}>Email: {user.email}</Text>
      {user.accounts.map((account) => (
        <View style={styles.accountContainer} key={account.type}>
          <Text style={styles.accountType}>{account.type}:</Text>
          <Text style={styles.accountBalance}>{account.balance}</Text>
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
  subtitle: {
    fontSize: 18,
    color: "gray",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  accountType: {
    fontSize: 18,
  },
  accountBalance: {
    fontSize: 18,
    marginLeft: 8,
  },
});

export default BankOverview;
