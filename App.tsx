import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BatSignal from './src/components/BatSignal';
import BtnActivateBatSignal from './src/components/BtnActivateBatSignal';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import BtnSend from './src/components/BtnSend';
import Home from './src/screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      
      <StatusBar style="auto" />
    </View>

    // <ScrollView>
    //     <View style={{width: '100%', alignItems: 'center', justifyContent: 'flex-start'}}>
    //         <Logo />
    //         <Form />
    //         <BtnSend />
    //     </View>
    // </ScrollView>
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
