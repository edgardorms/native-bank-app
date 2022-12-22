import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Friend } from "../types/models";

const friends = [
  {
    name: "Jane Smith",
    email: "janesmith@gmail.com",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@gmail.com",
  },
];

const FriendsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend List</Text>
      {friends.map((friend) => (
        <View style={styles.friendContainer} key={friend.name}>
          <Text style={styles.friendName}>{friend.name}</Text>
          <Text style={styles.friendEmail}>{friend.email}</Text>
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
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  friendName: {
    fontSize: 18,
  },
  friendEmail: {
    fontSize: 18,
    marginLeft: 8,
    color: "gray",
  },
});

export default FriendsList;
