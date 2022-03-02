import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../constants/colors";

import { StackNavCategories, StackNavFavorites } from "./StackNavigation";
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      activeColor={colors.accentColor}
      shifting={true}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Categories"
        component={StackNavCategories}
        options={{
          title: "Meals",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={StackNavFavorites}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
