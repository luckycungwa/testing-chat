import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-web";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>PROFILE PAGE</Text>
      <View style={[{ flex: 1 }, styles.contentContainer]}>
        <View style={{ flex: 1, backgroundColor: "#" }}>
          {/* TOP CONTAINER */}
          <View style={styles.imgContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
              }}
            />
            <View style={styles.camContainer}>
              <Image
                style={styles.camIcon}
                source={{
                  uri: "https://pics.freeicons.io/uploads/icons/png/17655483781571183080-512.png",
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 3, backgroundColor: "#" }}>
          {/* Middle contaienr */}
          <View style={styles.userForm}>
            <View style={styles.formField}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChange={(event) => setEmail(event.target.value)} // Handle user input changes
              />
              <TextInput
                style={styles.input}
                placeholder="Surname"
                onChange={(event) => setEmail(event.target.value)} // Handle user input changes
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)} // Handle user input changes
              />

              <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.saveBtn}>
                  <Text style={styles.ctaText}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, backgroundColor: "#" }}>BOTTOM</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "100",
    marginBottom: 24,
  },
  contentContainer: {
    backgroundColor: "#ecf5fd",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: "center",
    width: 150,
    height: 150,
    backgroundColor: "#ff0",
    borderRadius: 100,
    marginLeft: "30%",
    marginTop: 60, 
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  camContainer: {
    height: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000f88",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 50,
  },
  camIcon: {
    width: 50,
    height: 50,
    zIndex: 4,
  },
  input: {
    height: 34,
    // width: 320,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 0,
    paddingVertical: 20,
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  saveBtn: {
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: 34,
  },
  actionContainer: {
    width: 250,
    height: 40,
    justifyContent: "center",
    backgroundColor: "#8880ff",
    borderRadius: 24,
    marginTop: 12,
  },
  ctaText: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  userForm: {
    height: 600,
    width: 400,
    alignItems: 'center',
    justifyContent: "center",
    // backgroundColor: "#ff5457",
    padding: 28,
    // backgroundColor: "#f2f2f2",
  },
  formfield: {
    alignItems: 'center',
    justifyContent: "center",
    flex: "stretch",
    // backgroundColor: "#f2f2f2",
  },
});

export default ProfileScreen;
