import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {

  const [fontsLoaded] = useFonts({
    'lato-bold': require('./assets/fonts/lato-bold.ttf'),
    'lato-regular': require('./assets/fonts/lato-regular.ttf'),
    'lato-light': require('./assets/fonts/lato-light.ttf'),
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOREM IPSUM</Text>
      <StatusBar style="auto" />
    </View>
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
    fontFamily: 'lato-bold'
  }
});
