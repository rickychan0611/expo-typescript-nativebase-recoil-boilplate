import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { enableScreens } from "react-native-screens";
import { RecoilRoot } from "recoil";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";

import Router from "./screen/Router";

enableScreens(true);

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType { }
}

export default function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}
