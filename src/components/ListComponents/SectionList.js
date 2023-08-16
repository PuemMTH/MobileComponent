import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const data = [
  { title: 'Section 1', data: ['Item 1', 'Item 2', 'Item 3'] },
  { title: 'Section 2', data: ['Item 4', 'Item 5', 'Item 6'] },
  // ... more sections ...
];

const App = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
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
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
