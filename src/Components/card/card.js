import { StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { scaledValue } from '../../utils/styles.common'
import { DELETE, EDIT } from '../../assets'

const Card = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text numberOfLines={8}>Lorem </Text>
      <View style={styles.cardButtons}>
      <TouchableOpacity>
         <Image style={styles.delete} source={DELETE} />
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{navigation.navigate('noteDetails')}}>
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
        marginTop:scaledValue(10),
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