import Home from "@/screens/Home";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { View, Text } from "react-native";
import { fonts } from "@/constants/tokens";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  );
}
