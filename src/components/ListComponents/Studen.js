import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

// json file
import data from './Studen.json';

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.subject}
        key={data.subject.id} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
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
