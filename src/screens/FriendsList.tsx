import React from "react";
import FriendsContainer from "../components/FriendsContainer";

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
  return <FriendsContainer friends={friends} />;
};

export default FriendsList;
