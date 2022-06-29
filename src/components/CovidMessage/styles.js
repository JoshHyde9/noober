import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#3671ec",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#dcdcdc",
    marginBottom: 12,
  },
  text: {
    color: "#dcdcdc",
    maxWidth: 280,
    marginBottom: 12,
  },
  learnMore: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#dcdcdc",
    fontWeight: "700",
  },
  learnMoreArrow: {
    fontSize: 14,
  },
});
