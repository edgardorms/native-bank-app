import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { User } from "../types/models";

const BankOverviewScreen = (props: {
  screenProps: { user: User },
  navigation: any,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vista general bancaria</Text>
      <Text style={styles.subtitle}>Nombre: {props.screenProps.user.name}</Text>
      <Text style={styles.subtitle}>
        Correo electrónico: {props.screenProps.user.email}
      </Text>
      {props.screenProps.user.accounts.map((account) => (
        <View style={styles.accountContainer} key={account.type}>
          <Text style={styles.accountType}>{account.type}:</Text>
          <Text style={styles.accountBalance}>{account.balance}</Text>
        </View>
      ))}
      <Button
        title="Ver transacciones"
        onPress={() => props.navigation.navigate('Transactions')}
      />
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

export default BankOverviewScreen;
