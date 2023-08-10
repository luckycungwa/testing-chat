import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// IMPORT COMPONENTS
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>MY BASIC SOCIAL MEDIA CHAT APP!</Text>
      <StatusBar style="auto" />
      <LoginScreen/>
      {/* <ProfileScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
