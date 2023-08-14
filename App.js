import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// IMPORT COMPONENTS
import LoginScreen from './pages/LoginScreen';
import ProfileScreen from './pages/ProfileScreen';
import ChatList from './pages/ChatList';



export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.logoText}>Z'KHIPHANI</Text>
      <Text>MY BASIC SOCIAL MEDIA CHAT APP!</Text>
      <StatusBar style="auto" />
      {/* <LoginScreen/> */}
      {/* <ProfileScreen/> */}
      <ChatList/>
      
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
  logoText: {
    fontSize: 32,
    marginVertical: 24,
    fontWeight: "800",
  }
});
