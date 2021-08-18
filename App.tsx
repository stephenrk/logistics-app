import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Book } from './src/screens/Book';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from 'styled-components';
import theme from './src/global/styles/theme'
import {
  useFonts,
  Sora_700Bold,
  Sora_600SemiBold,
  Sora_400Regular
} from '@expo-google-fonts/sora'
import AppLoading from 'expo-app-loading';

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Sora_700Bold,
    Sora_600SemiBold,
    Sora_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
              <Screen name="Book" component={Book} />
            </Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
  );
}
