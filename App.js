import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomTab from './src/Components/footerButton/bottomTab';
import Home from './src/Screens/HomeScreen/home';
import Header from './src/Components/header/header';
import { scaledValue } from './src/utils/styles.common';
import Routes from './routes';

export default function App() {

 
  return (
    <SafeAreaView style={styles.container}>
     <Header/>
      <Routes/>
      <StatusBar backgroundColor='white' />
     <BottomTab/>
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
