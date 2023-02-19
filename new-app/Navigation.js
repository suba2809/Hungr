import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import AllRecipes from './Screens/AllRecipes';

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions = {screenOptions}>
            <Stack.Screen name = "Home" component={Home} />
            <Stack.Screen name = "AllRecipes" component={AllRecipes} />
            {/* <Stack.Screen name = 'recipeDetail' component={recipeDetail} /> */}
        </Stack.Navigator>
    </NavigationContainer>
    );
}