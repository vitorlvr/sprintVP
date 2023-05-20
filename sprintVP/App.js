import React from 'react';
import { View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AuthScreen from './src/pages/acesso/AuthScreen';
import { Routes } from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return (
      <View />
    );
  }


  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='AuthScreen' component={AuthScreen} />
        <Stack.Screen name='Routes' component={Routes} />
      </Stack.Navigator>

    </NavigationContainer>
  );

}