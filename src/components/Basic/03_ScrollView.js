import React, { useState } from 'react';
import { View, Image, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

import OIP from '../../images/OIP.jpeg';

const App = () => {
  const [inputText, setInputText] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={OIP}
        style={styles.image}
      />
      <Text style={styles.text}>Hello, React Native!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={inputText}
        onChangeText={setInputText}
      />
      <View style={styles.longContent}>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
        <Text>content that might require scrolling.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
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
  longContent: {
    marginTop: 20,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: 300,
  },
});

export default App;
