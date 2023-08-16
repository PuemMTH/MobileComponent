import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonComponent from './04_Button';
import SwitchComponent from './05_Switch';
import PickerComponent from './05_Switch';
import ActivityIndicatorComponent from './07_ActivityIndicator';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');
  const [sliderValue, setSliderValue] = useState(50);

  const pickerItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <View style={styles.container}>
      <ButtonComponent title="Press Me" onPress={() => alert('Button Pressed!')} />

      <SwitchComponent value={isEnabled} onValueChange={() => setIsEnabled(!isEnabled)} />

      <PickerComponent
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        items={pickerItems}
      />
      <ActivityIndicatorComponent size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
