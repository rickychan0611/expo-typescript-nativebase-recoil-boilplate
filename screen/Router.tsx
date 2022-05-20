import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from "./RootStackPrams";
import Home from './Home';
import SignIn from './SignIn';

const Router = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

export default Router
