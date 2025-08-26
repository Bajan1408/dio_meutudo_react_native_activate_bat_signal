import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BatSignal from './src/components/BatSignal';
import BtnActivateBatSignal from './src/components/BtnActivateBatSignal';
import Logo from './src/components/Logo';

export default function App() {
  return (
    <View style={styles.container}>
      <BatSignal />
      <BtnActivateBatSignal />
      <Logo />
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
});
