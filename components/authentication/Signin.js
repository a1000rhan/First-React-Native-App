import { Input, Stack, FormControl, Button } from "native-base";

import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { observer } from "mobx-react";
import authstore from "../../Store/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleUsername = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };

  const handleSubmit = () => {
    console.log(user);
    authstore.signIn(user, navigation);
  };
  return (
    <Stack space={4} w="100%" alignItems="center">
      <FormControl onSubmit={handleSubmit}>
        <Stack space={5}>
          <Stack>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={handleUsername}
              value={user.username}
              variant="underlined"
              p={2}
              placeholder="Username"
            />
          </Stack>
          <Stack>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={handlePassword}
              variant="underlined"
              value={user.password}
              p={2}
              type="password"
              placeholder="Password"
            />
          </Stack>
        </Stack>
        <Button onPress={handleSubmit}>Sign In</Button>
      </FormControl>
    </Stack>
  );
};

export default observer(Signin);

const styles = StyleSheet.create({});
