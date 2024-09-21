
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Routes from "./routes/routes";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

const fetchFonts = () => {
  return Font.loadAsync({
    'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await fetchFonts();
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
      <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
