import React from "react";
import { View } from "react-native";

import { HomeMap } from "../../components/HomeMap";
import { CovidMessage } from "../../components/CovidMessage";
import { HomeSearch } from "../../components/HomeSearch";

export const HomeScreen = (props) => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};
