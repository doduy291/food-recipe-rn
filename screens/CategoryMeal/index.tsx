import { FlatList, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import MealItem from "../../components/MealItem";

import { styles } from "./styles";

import { CATEGORIES } from "../../data/categories.data";
import { MEALS } from "../../data/meals.data";

interface RouteProps {
  key: string;
  name: string;
  params: {
    categoryId: string;
  };
}

const CategoryMeal = () => {
  const route = useRoute<RouteProps>();
  let navigation = useNavigation();

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === route.params.categoryId
  );

  const filteredMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(route.params.categoryId)
  );

  const onSelectMeal = (mealId: string) => {
    navigation.navigate("MealDetail", { mealId });
  };

  useEffect(() => {
    navigation.setOptions({ title: selectedCategory?.title });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(data) => data.id}
        data={filteredMeals}
        renderItem={(data) => (
          <MealItem itemData={data.item} onSelectMeal={onSelectMeal} />
        )}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default CategoryMeal;
