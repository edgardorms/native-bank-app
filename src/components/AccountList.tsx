import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Account } from "../types/models";

const AccountList = (props: { accounts: Account[] }) => {
  return (
    <View>
      {props.accounts.map((account) => (
        <View style={styles.accountContainer} key={account.type}>
          <Text style={styles.accountType}>{account.type}:</Text>
          <Text style={styles.accountBalance}>{account.balance}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AccountList;
