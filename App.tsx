// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BankOverview from "./src/screens/BankOverview";
import FriendsList from "./src/screens/FriendsList";
import TransactionsList from "./src/screens/TransactionsList";
import { User, Transaction, Friend } from "./src/types/models";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

type RootStackParamList = {
  Home: User;
  Transactions: Transaction[];
  Friends: Friend[];
};

const Stack = createMaterialBottomTabNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={BankOverview} />
        <Stack.Screen name="Transactions" component={TransactionsList} />
        <Stack.Screen name="Friends" component={FriendsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
