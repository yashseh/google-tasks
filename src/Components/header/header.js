import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scaledValue } from '../../Utils/styles.common'

const Header = () => {
  return (
    <View style={styles.headerComponent}>
      <Text style={styles.heading}>Tasks</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerComponent:{
        width:'100%',
        backgroundColor:'white',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    heading:{
     fontSize:scaledValue(18),
     color:`#000000`,
     fontWeight:'500'
    },
})