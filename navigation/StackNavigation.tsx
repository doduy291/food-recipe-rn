import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import Categories from "../screens/Categories";
import CategoryMeal from "../screens/CategoryMeal";
import MealDetail from "../screens/MealDetail";
import Favorites from "../screens/Favorites";
import Filters from "../screens/Filters";

import HeaderNavIcon from "../components/HeaderNavIcon";
import { colors } from "../constants/colors";

const Stack = createStackNavigator();

const StackNavCategories = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation }) => ({
          title: "Categories",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <HeaderNavIcon iconName="ios-menu" />
              </TouchableOpacity>
            );
          },
        })}
      />
      <Stack.Screen name="CategoryMeal" component={CategoryMeal} />
      <Stack.Screen
        name="MealDetail"
        component={MealDetail}
        options={{
          title: "Meal Detail",
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavFavorites = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: "Your Favorites",
        }}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetail}
        options={{
          title: "Meal Detail",
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavFilters = () => {
  return (
    <Stack.Navigator
      initialRouteName="Filters"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: colors.primaryColor,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Filters"
        component={Filters}
        options={({ navigation }) => ({
          title: "Filtered Meals",
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <HeaderNavIcon iconName="ios-menu" />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

export { StackNavCategories, StackNavFavorites, StackNavFilters };
