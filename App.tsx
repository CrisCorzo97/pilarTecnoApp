import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
