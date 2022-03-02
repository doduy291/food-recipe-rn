import { View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../constants/colors";

interface Props {
  iconName: string | any;
}
const HeaderNavIcon = ({ iconName }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={23} color={"white"} />
    </View>
  );
};

export default HeaderNavIcon;
