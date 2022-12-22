import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/HeaderBankOverview";
import AccountList from "../components/AccountList";

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
      <Header name={user.name} email={user.email} />
      <AccountList accounts={user.accounts} />
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
