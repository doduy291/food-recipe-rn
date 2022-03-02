import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigation from "./TabNavigation";
import { StackNavFilters } from "./StackNavigation";
import { colors } from "../constants/colors";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: colors.accentColor,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={TabNavigation}
      ></Drawer.Screen>
      <Drawer.Screen name="Filters" component={StackNavFilters}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerNavigation;
