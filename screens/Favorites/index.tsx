import { Text, View, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import MealItem from "../../components/MealItem";
import { styles } from "./styles";

import { MEALS } from "../../data/meals.data";
type Props = {};

const Favorites = (props: Props) => {
  const navigation = useNavigation();
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  const onSelectMeal = (mealId: string) => {
    navigation.navigate("MealDetail", { mealId });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(data) => data.id}
        data={favoriteMeals}
        renderItem={(data) => (
          <MealItem itemData={data.item} onSelectMeal={onSelectMeal} />
        )}
      />
    </View>
  );
};

export default Favorites;
