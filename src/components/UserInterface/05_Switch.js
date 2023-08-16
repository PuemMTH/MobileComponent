import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';


// ตัวอย่างการนำไปใช้

// const App = () => {
//     const [switchValue, setSwitchValue] = React.useState(false);
//     const toggleSwitch = (value) => {
//         setSwitchValue(value);
//     };
//     return (
//         <View style={styles.container}>
//         <SwitchComponent value={switchValue} onValueChange={toggleSwitch} />
//         </View>
//     );
// }

const SwitchComponent = ({ value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text>Switch: {value ? 'On' : 'Off'}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default SwitchComponent;