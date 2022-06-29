import React from "react";
import { View, Text } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

export const HomeSearch = () => {
  return (
    <View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <View style={styles.searchIcon}>
          <FontAwesome name="search" size={16} />
          <Text style={styles.inputText}>Where to?</Text>
        </View>

        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={14} color={"#333"} />
          <Text>Now</Text>
          <Entypo name="chevron-small-down" size={16} color={"#333"} />
        </View>
      </View>

      {/* Previous Destinations */}
      <View style={styles.destinationContainer}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="clockcircle" size={20} color={"#666"} />
          </View>
          <View style={styles.borderBottom}>
            <Text style={styles.destinationTextHeading}>Your Mum's House</Text>
            <Text style={styles.destinationTextLocation}>
              42 Wallaby Way, Sydney
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="clockcircle" size={20} color={"#666"} />
          </View>
          <View style={styles.borderBottom}>
            <Text style={styles.destinationTextHeading}>Your Mum's House</Text>
            <Text style={styles.destinationTextLocation}>
              42 Wallaby Way, Sydney
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="clockcircle" size={20} color={"#666"} />
          </View>
          <View style={styles.borderBottom}>
            <Text style={styles.destinationTextHeading}>Your Mum's House</Text>
            <Text style={styles.destinationTextLocation}>
              42 Wallaby Way, Sydney
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <AntDesign name="clockcircle" size={20} color={"#666"} />
          </View>
          <View style={styles.borderBottom}>
            <Text style={styles.destinationTextHeading}>Your Mum's House</Text>
            <Text style={styles.destinationTextLocation}>
              42 Wallaby Way, Sydney
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
