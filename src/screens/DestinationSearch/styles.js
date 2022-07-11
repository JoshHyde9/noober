import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 50 : 0,
    padding: 10,
    height: "100%",
  },
  textInput: {
    height: 35,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
});
