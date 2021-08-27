import React from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import HomeScreen from './screens/HomeScreen';
import AddTrainingDayScreen from './screens/AddTrainingDayScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name="Add Training Day" component={AddTrainingDayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'lato-regular'
  }
});
