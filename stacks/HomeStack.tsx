import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';

export type HomeStackList = {
  Home: undefined;
  Language: undefined;
};

const Stack = createNativeStackNavigator<HomeStackList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Language"
        options={{
          presentation: 'modal',
        }}
        component={LanguageScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
