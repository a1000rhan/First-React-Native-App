import { Input, Stack, FormControl, Button } from "native-base";

import React, { useState } from "react";
import { StyleSheet, Text, Alert } from "react-native";
import authstore from "../../Store/authStore";
import { observer } from "mobx-react";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleUsername = (event) => {
    setUser({ ...user, username: event });
  };
  const handleEmail = (event) => {
    setUser({ ...user, email: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };

  const handleSubmit = () => {
    console.log(user);
    authstore.signUp(user);
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
              required
            />
          </Stack>
          <Stack>
            <FormControl.Label>email</FormControl.Label>
            <Input
              onChangeText={handleEmail}
              variant="underlined"
              value={user.email}
              p={2}
              type="email"
              placeholder="Password"
              required
              autocomplete="off"
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
              required
            />
          </Stack>
        </Stack>
        <Button onPress={handleSubmit}>Sign Up</Button>
      </FormControl>
      <Text>
        I have already and an{" "}
        <Text
          style={{ color: "#52B4D1", fontWeight: "bold" }}
          onPress={() => {
            navigation.push("Signin");
          }}
        >
          Account
        </Text>
      </Text>
    </Stack>
  );
};

export default observer(Signup);

const styles = StyleSheet.create({});
