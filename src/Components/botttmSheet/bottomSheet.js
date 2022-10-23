import React, { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import {Text,View,TouchableOpacity,StyleSheet,Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { scaledValue } from '../../Utils/styles.common';


export const BottomSheet = ({modalizeRef,textValue,addButton,handelTextChange}) => {

  return (
    <>
      <Modalize
       scrollViewProps={{ showsVerticalScrollIndicator: false }}
       withHandle={false}
       avoidKeyboardLikeIOS={true}
       modalHeight={scaledValue(300)}
       modalStyle={{
           borderTopLeftRadius:0,
           borderTopRightRadius:0,
           backgroundColor:'white',
       }}
       snapPoint={100}
       ref={modalizeRef}>
       <View style={{minHeight:300,width:'100%',backgroundColor:'white'}}>
       <TextInput  blurOnSubmit={true} autoFocus={true} spellCheck={false} multiline={true}  onSubmitEditing={addButton} maxLength={250} style={{width:'100%',padding:scaledValue(10),textAlignVertical:'top'}} scrollEnabled={true} numberOfLines={5}  onChangeText={handelTextChange} placeholder='Add Note' placeholderTextColor={'tomato'} value={textValue}/>
       </View>
      </Modalize>
    </>
  );
};

const styles = StyleSheet.create({
  updateButton:{
    backgroundColor:'white',
    alignSelf:'flex-end',
    marginHorizontal:scaledValue(20),
    padding:scaledValue(10),
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});