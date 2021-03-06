import { Input, Stack, FormControl, Button, useToast } from "native-base";
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { observer } from "mobx-react";
import authstore from "../../Store/authStore";
import Icon from "react-native-vector-icons/FontAwesome";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(true);
  const toast = useToast();
  const handleUsername = (event) => {
    setUser({ ...user, username: event });
  };
  const handlePassword = (event) => {
    setUser({ ...user, password: event });
  };

  const handleSubmit = () => {
    // console.log(user);
    authstore.signIn(user, navigation, toast);
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
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              InputRightElement={
                <Icon
                  style={{ marginRight: 10 }}
                  name={showPassword ? "eye" : "eye-slash"}
                  size={20}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
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
