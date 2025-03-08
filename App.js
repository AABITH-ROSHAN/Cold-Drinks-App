import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screen components
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import JuiceDetailsScreen from './screens/JuiceDetailsScreen';
import MilkshakeDetailsScreen from './screens/MilkshakeDetailsScreen';
import SodaDetailsScreen from './screens/SodaDetailsScreen';
import FaloodaDetailsScreen from './screens/FaloodaDetailsScreen';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JuiceDetailsScreen" component={JuiceDetailsScreen} />
        <Stack.Screen name="MilkshakeDetailsScreen" component={MilkshakeDetailsScreen} />
        <Stack.Screen name="SodaDetailsScreen" component={SodaDetailsScreen} />
        <Stack.Screen name="FaloodaDetailsScreen" component={FaloodaDetailsScreen} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
