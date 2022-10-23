import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';
import React from 'react'
import { scaledValue } from '../../Utils/styles.common'
import { DELETE, EDIT } from '../../Assets'

const Card = ({text,onCardPress,deleteButton}) => {

  return (
    <View style={styles.container}>
      <Text numberOfLines={8}>{text}</Text>
      <View style={styles.cardButtons}>
      <TouchableOpacity onPress={deleteButton}>
         <Image style={styles.delete} source={DELETE} />
         </TouchableOpacity>
         <TouchableOpacity onPress={onCardPress}>
         <Image style={styles.edit} source={EDIT} />
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container:{
        width:'95%',
        alignSelf:'center',
        justifyContent:'space-between',
        padding:scaledValue(10),
        marginBottom:scaledValue(10),
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius:8,
        minHeight:scaledValue(70),
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    edit:{
        width:scaledValue(30),
        height:scaledValue(30)
    },
    delete:{
        width:scaledValue(30),
        height:scaledValue(30)
    },
    cardButtons:{
        marginTop:scaledValue(5),
        flexDirection:'row-reverse',
        justifyContent:'space-between',
    }
})