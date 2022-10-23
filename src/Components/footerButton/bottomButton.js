import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { scaledValue } from "../../Utils/styles.common";
import { PLUS_ICON } from "../../Assets";

const BottomButton = (props) => {
  return (
   
     <TouchableHighlight style={styles.buttonContainer} underlayColor={'white'} activeOpacity={0.5} onPress={props.onButtonPress} >
          <View style={styles.button}>
            <Image
              style={{ width:scaledValue(35), height:scaledValue(35)}}
              resizeMode="contain"
              source={PLUS_ICON}
            />
          </View>
        </TouchableHighlight>
      
  );
};

export default BottomButton;

const styles = StyleSheet.create({
  buttonContainer:{
    position: "absolute",
    bottom:35,
    alignSelf:'center',
    borderRadius:50,
  }, 
  button: {
    width:scaledValue(60),
    height:scaledValue(60),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

});
