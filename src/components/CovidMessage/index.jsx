import React from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

export const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Responsibly</Text>
      <Text style={styles.text}>
        Help keep our communities safe as we naviage this together
      </Text>
      <Text style={styles.learnMore}>
        Stay Informed <Icon style={styles.learnMoreArrow} name="arrowright" />
      </Text>
    </View>
  );
};
