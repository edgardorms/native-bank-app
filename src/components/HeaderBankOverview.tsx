import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props: { name: string; email: string }) => {
  return (
    <View>
      <Text style={styles.title}>Welcome to AppBank</Text>
      <Text style={styles.subtitle}>Name: {props.name}</Text>
      <Text style={styles.subtitle}>Email: {props.email}</Text>
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

export default Header;
