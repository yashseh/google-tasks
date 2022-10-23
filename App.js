import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scaledValue } from './src/Utils/styles.common';
import Routes from './routes';
import Header from './src/Components/header/header';

export default function App() {

 
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
      <Routes/>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
    zIndex:1,
  },
  cardView:{
    marginHorizontal:scaledValue(10),
    flex:1,
    backgroundColor:'transparent'
   
  }
});
