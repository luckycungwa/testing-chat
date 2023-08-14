import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Linking,
  Alert,
  TouchableOpacity,
} from "react-native";

// importiung YUP
import * as yup from "yup";

const LoginScreen = () => {
  // USe states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(21),
  });

  const handleSignup = () => {
    schema
      .isValid({
        email: email,
        password: password,
      })
      .then((valid) => {
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

  // RENER CONTENTS
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Username/email"
          onChangeText={(text) => setEmail(text)} // Handle user input changes
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)} // Handle user input changes
        />

        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.ctaBtn} onPress={handleSignup}>
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
    borderWidth: 1.5,
    borderRadius: 0,
    paddingVertical: 20,
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  card: {
    padding: 16,
    justifyContent: "space-between",
    // backgroundColor: "#fdfeff",
    borderRadius: 12,
    borderColor: "#1d1d1d",
    borderWidth: 2,
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
    backgroundColor: "#313131",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 34,
    marginVertical: 16,
  },
  ctaText: {
    color: "#f2f2f2",
  },
});

export default LoginScreen;
