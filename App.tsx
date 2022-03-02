import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import Navigation from "./navigation/Navigation";

enableScreens();

export default function App() {
  let [fontsLoaded] = useFonts({
    "SourceSans-Regular": require("./assets/fonts/SourceSansPro-Regular.ttf"),
    "SourceSans-Bold": require("./assets/fonts/SourceSansPro-Bold.ttf"),
    "SourceSans-SemiBold": require("./assets/fonts/SourceSansPro-SemiBold.ttf"),
  });

  // Using Fonts
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
}
