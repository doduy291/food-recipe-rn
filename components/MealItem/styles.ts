import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: "#ccc",
    margin: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  headerTitle: {
    height: "90%",
  },
  title: {
    fontFamily: "SourceSans-Bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  detail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
