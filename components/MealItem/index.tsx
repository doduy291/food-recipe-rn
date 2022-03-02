import React from "react";
import { ImageBackground, TouchableNativeFeedback, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Typography from "../Typography";
import { styles } from "./styles";

interface itemDataObj {
  id: string;
  title: string;
  duration: number;
  complexity: string;
  affordability: string;
  imageUrl: string;
}

interface Props {
  itemData: itemDataObj;
  onSelectMeal: (mealId: string) => void;
}

const MealItem = ({ itemData, onSelectMeal }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={onSelectMeal.bind(this, itemData.id)}>
        <View>
          <View style={[styles.row, styles.headerTitle]}>
            <ImageBackground
              source={{ uri: itemData.imageUrl }}
              style={styles.bgImg}
            >
              <Typography style={styles.title}>{itemData.title}</Typography>
            </ImageBackground>
          </View>
          <View style={[styles.row, styles.detail]}>
            <Typography>{itemData.duration}m</Typography>
            <Typography>{itemData.complexity}</Typography>
            <Typography>{itemData.affordability}</Typography>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default MealItem;
