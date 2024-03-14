import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginComponent from '../features/login';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import HomeComponent from '../features/home';
import SignUpComponent from '../features/signup';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpComponent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
