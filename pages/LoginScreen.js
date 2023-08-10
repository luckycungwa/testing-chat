import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Linking,
  Alert,TouchableOpacity,
} from "react-native";

// importiung YUP
import * as yup from "yup";

const LoginScreen = () => {
  // USe states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    

    schema
      .isValid({
        email: email,
        password: password,
      })
      .then(valid => {
        console.log("Checking credentials");
        if (valid) {
          console.log("Correct credentials");
        } else {
          Alert.alert(
            "error",
            "incorrect email or password",
            "invalid inputs",
            [{ text: "ok", onPress: () => console.log("user understands") }]
          );

          // console.log("Incorrect credentials");
        }
      });
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  // RENER CONTENTS
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username/email"
        onChange={(text) => setEmail(text)} // Handle user input changes
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChange={(text) => setPassword(text)} // Handle user input changes
      />

      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.saveBtn}
        >
          <Text style={styles.ctaText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        style={styles.button}
        onPress={() => {
          handleSignup();
        }}
        title="Login"
      /> */}

      <View style={styles.bottomText}>
        <Text>
          New account :
          <Text style={styles.link} onPress={() => Linking.openURL("#")}>
            sign up here
          </Text>
        </Text>
        <Text>Forgot password</Text>
      </View>
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between",
  },
  input: {
    maxHeight: 28,
    // maxWidth: 200,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 0,
    paddingVertical: 20,
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  bottomText: {
    fontSize: 8,
    textAlign: "center",
    fontWeight: 100,
    letterSpacing: 0.4,
    marginVertical: 12,
  },
  link: {
    color: "#4c91ff",
    textDecorationLine: "underline",
    paddingHorizontal: 8,
    fontWeight: 600,
  },
  ctaBtn: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 32,
  },
});

export default LoginScreen;
