// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BankOverview from "./src/screens/BankOverview";
import FriendsList from "./src/screens/FriendsList";
import TransactionsList from "./src/screens/TransactionsList";
import { RootStackParamList } from "./src/types/models";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
