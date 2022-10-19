import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { scaledValue } from "../../utils/styles.common";
import { PLUS_ICON } from "../../assets";

const BottomTab = () => {
  return (
    <View>
        <TouchableHighlight activeOpacity={0.5}  onPress={()=>{console.log('la la')}}>
          <View style={styles.button}>
            <Image
              style={{ width:scaledValue(35), height:scaledValue(35)}}
              resizeMode="contain"
              source={PLUS_ICON}
            />
          </View>
        </TouchableHighlight>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  button: {
    width:scaledValue(60),
    height:scaledValue(60),
    justifyContent:'center',
    alignItems:'center',
    position: "absolute",
    bottom:35,
    alignSelf:'center',
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
