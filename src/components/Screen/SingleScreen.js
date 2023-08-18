// yarn add @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native react-native-safe-area-context react-native-screens
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
        </View>
    );
}

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

const SingleScreen = () => {
    const Tab = createBottomTabNavigator();
    const icon = {
        Home: <AntDesign name="home" size={24} color="black" />,
        List: <Feather name="list" size={24} color="black" />,
        Detail: <MaterialCommunityIcons name="details" size={24} color="black" />
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () => icon.Home
                }}/>
                <Tab.Screen name="List" component={ListScreen} options={{
                    tabBarIcon: () => icon.List
                }}/>
                <Tab.Screen name="Detail" component={DetailScreen} options={{
                    tabBarIcon: () => icon.Detail
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default SingleScreen;