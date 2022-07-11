import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import { HomeScreen } from "./src/screens/HomeScreen";
import { DestinationSearch } from "./src/screens/DestinationSearch";

export const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <DestinationSearch />
    </View>
  );
};

export default App;
