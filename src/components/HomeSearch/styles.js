import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: "#e2e2e2",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    marginBottom: 20,
  },
  searchIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  inputText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
    color: "#777",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    color: "#333",
  },
  destinationContainer: {
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  iconContainer: {
    padding: 10,
    marginRight: 10,
  },
  borderBottom: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "100%",
  },
  destinationTextHeading: {
    fontWeight: "500",
    fontSize: 16,
  },
  destinationTextLocation: {
    fontSize: 12,
    paddingBottom: 15,
  },
});
