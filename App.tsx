
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';





import Home from './src/screens/Home';
import FormScreen from './src/screens/FormScreen';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'form'>('home');
  
  function setHome() {
    setScreen('home'); 
  }

  function setForm() {
    setScreen('form'); 
  }

  return (
    <View style={styles.container}>
        {screen === 'home' && (
            <Home onPressContinue={setForm} />
        )}

        {screen === 'form' && (
            <FormScreen onPressReturn={setHome} />
        )}
        <StatusBar style='auto' />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeOn: {
    position: 'absolute', 
    top: 150
  },
  homeOff: {
    display: 'none'
  }, 
  formScreenOn: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    position: 'absolute', top: 10
  },
  formScreenOff: {
    display: 'none'
  }
});
