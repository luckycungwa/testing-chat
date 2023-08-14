import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const LoginScreen = () => {
  // USe states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [movies, setmovies] = useState([
    "Horor", "Comedy", "Other"
  ]);
  const [password, setPassword] = useState('');
  const [pass, setPass] = useState('');

  const addMovie = (title) => {
    setmovies((movies) => {
      return [...movies, title.trim()];
    });
  };

  const resetState = () => {
// reset states to default values
    setUsername("");
    setEmail("");
    setAge(0);
    setPassword("");
    setPass("");
    setmovies([
    "Horor", "Comedy", "Other"
  ]);
  };

  const deleteItem = () => {
    if (movies[index]) {
      const newItem = [...movies];
      newItem.splice(index, 1);
      setmovies(newItem);
    } else {
      console.log("Removed successful!");
    }
  } 

  // USE EFFECTS HERE
useEffect(() => {
  console.log(username);
}, [username]);

useEffect(() => {
  console.log(email);
}, [email]);

useEffect(() => {
  console.log(age);
}, [age]);

useEffect(() => {
  console.log(movies);
}, [movies]);

useEffect(() => {
  console.log(movies);
  console.log("removed successfuly");
}, [username, email, age, movies]);

// RENER CONTENTS
  return (
    <View style={styles.container}>
    
    { movies.map(item => {
      return(<Text>{item}</Text>)
    }) }

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)} // Handle user input changes
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)} // Handle user input changes
      />

      <TextInput
        style={styles.input}
        placeholder="age"
        onChange={(event) => setAge(event.target.value)} // Handle user input changes
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)} // Handle user input changes
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        onChange={(event) => setPass(event.target.value)} // Handle user input changes
      />

      <TextInput
        style={styles.input}
        placeholder="Movie type"
        onBlur={(event) => addMovie(event.target.value)} // Handle user input changes
      />

      <Button style={styles.button} onPress={()=> {resetState()}} title="Reset"/>

    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'space-between',
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
});

export default LoginScreen;
