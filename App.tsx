import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [userString, setUserString] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        value={userString}
        placeholder="Enter your name"
        onChangeText={setUserString}
        style={styles.textInput}
      />
      <Button title="Nice Button" onPress={() => {
        Alert.alert("Welcome Message", `Hello there ${userString}`);
      }} />
      <StatusBar style="auto" />
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
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
