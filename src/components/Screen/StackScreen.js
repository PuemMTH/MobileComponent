import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

// List of screens
const ListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>ListScreen</Text>
        </View>
    );
}

const DetailScreen = ({ navigation }) => {
    return (
        <View>
            <Text>DetailScreen</Text>      
        </View>
    );
}


const StackScreen = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
}

export default StackScreen;