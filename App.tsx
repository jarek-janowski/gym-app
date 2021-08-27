import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import AddTrainingDayScreen from './screens/AddTrainingDayScreen';

import Colors from './constants/Colors'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {

  const [fontsLoaded] = useFonts({
    'lato-bold': require('./assets/fonts/lato-bold.ttf'),
    'lato-regular': require('./assets/fonts/lato-regular.ttf'),
    'lato-light': require('./assets/fonts/lato-light.ttf'),
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontFamily: 'lato-bold',
            },
          }}
        >
          <Stack.Screen options={{ title: '💪  Gym App' }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ title: 'Dodaj trening' }} name="AddTrainingDay" component={AddTrainingDayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


