import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "./RootStackPrams";
import { Button, Center, FormControl, Input } from "native-base";

type signInProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>

const SignIn = () => {
  const navigation = useNavigation<signInProp>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Center flex={1} p={10} bg="white">
      <FormControl>
        <FormControl.Label>Username</FormControl.Label>
        <Input placeholder="Username" value={username} 
        onChangeText={(str) => setUsername(str)}
        />
        <FormControl.Label>Password</FormControl.Label>
        <Input placeholder="Password" value={password} 
        onChangeText={(str) => setPassword(str)}
        />
        <Button my={5}>Sign In</Button>
      </FormControl>
    </Center>
  )
}

export default SignIn