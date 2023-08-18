import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Image from './src/components/Basic/01_Image';
// import AppText from './src/components/Basic/02_TextInput_Button';
// import ScrollView from './src/components/Basic/03_ScrollView';
// import UserInterface from './src/components/UserInterface/08_UserInterface';


import SingleScreen from './src/components/Screen/SingleScreen';


export default function App() {
  return (
      <>
        <SingleScreen />
        <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
