import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

import { HomeScreen } from "./src/screens/HomeScreen";

export const App = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
  );
};

export default App;
