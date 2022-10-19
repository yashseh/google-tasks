import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../../Components/card/card';
import { scaledValue } from '../../utils/styles.common';
const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Card/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    mainContainer:{
     flex:1,
     marginHorizontal:scaledValue(10),
    },
})