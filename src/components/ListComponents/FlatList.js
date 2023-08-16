import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  // ... more items ...
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
