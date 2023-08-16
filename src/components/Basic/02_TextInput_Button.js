import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, Button } from 'react-native';

// TouchableOpacity is a button that can be styled
import { TouchableOpacity } from 'react-native';

const AppText = () => {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Text style={styles.text}>{inputText}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Normal Button */}
      <Button
        title="Click me"
        onPress={() => {
          setInputText('You clicked me!');
        }}
        color={'red'}
      />

      {/* TouchableOpacity Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert('You clicked me!');
        }}
        // onLongPress={}
        // onPressIn={}
        onLongPress={() => {
          alert('You long pressed me!');
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>

    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // You can adjust the resizeMode as needed
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 100,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  }
});

export default AppText;
