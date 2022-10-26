import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scaledValue } from './src/Utils/styles.common';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store } from './src/App/store';
import Header from './src/Components/header/header';

export default function App() {

 
  return (
	<Provider store={store}>
    <SafeAreaView style={styles.container}>
    <Header/>
      <Routes/>
      <StatusBar style='auto' />
    </SafeAreaView>
	</Provider>
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
