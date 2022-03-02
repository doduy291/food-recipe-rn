import styled from "@emotion/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  height: 150px;
  margin: 15px;
`;

export const extraStyles = StyleSheet.create({
  shadowBox: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  boldTitle: {
    fontFamily: "SourceSans-Bold",
    fontSize: 18,
  },
});
