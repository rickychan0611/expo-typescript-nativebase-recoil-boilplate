import React from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "./RootStackPrams";

import { Button, Center } from "native-base";

type HomeProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const Home = () => {
  const navigation = useNavigation<HomeProp>();

  return (
    <Center flex={1}>
      <Button onPress={() => navigation.navigate("SignIn")}>Go to sign in</Button>
    </Center>
  )
}

export default Home