import { StackNavigationProp } from "@react-navigation/stack";

export type MainStackParamList = {
  Categories: undefined;
  CategoryMeal: undefined;
  MealDetail: undefined;
};

export type MainNavigationProp<RouteName extends keyof MainStackParamList> =
  StackNavigationProp<MainStackParamList, RouteName>;
