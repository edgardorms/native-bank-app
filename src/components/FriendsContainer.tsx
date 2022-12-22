import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Friend as FriendProps } from "../types/models";

const Friend = (props: FriendProps) => {
  return (
    <View style={styles.friendContainer}>
      <Text style={styles.friendName}>{props.name}</Text>
      <Text style={styles.friendEmail}>{props.email}</Text>
    </View>
  );
};

const FriendsContainer = (props: { friends: FriendProps[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend List</Text>
      {props.friends.map((friend) => (
        <Friend key={friend.name} name={friend.name} email={friend.email} />
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

export default FriendsContainer;
