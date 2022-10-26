import { StyleSheet, View, TextInput,Text,TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { scaledValue } from "../../Utils/styles.common";
import { useNavigation } from "@react-navigation/native";
import { useSelector,useDispatch } from "react-redux";
import { editNote } from "../../App/features/notesSlice";
const NoteDetails = ({route}) => {
  const {noteIndex} = route.params;
  const dispatch = useDispatch();
  var data = useSelector((state)=>state.notes.data)
  var currentDataValue = data[noteIndex]
  console.log(currentDataValue)
  const handlerFunction =() =>{
	  const payload  = {
		  value : textValue,
		  index : noteIndex
	  }
    dispatch(editNote(payload));
    navigation.navigate('home')
  }
  const navigation = useNavigation();
  const [textValue,updateTextValue] = useState(currentDataValue);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline={true}
        cursorColor={'seagreen'}
        underLineColor={"transparent"}
        selectionColor={"transparent"}
        value={textValue}
        onChangeText={(e)=>{updateTextValue(e)}}

      />
      <TouchableOpacity onPress={ ()=> {currentDataValue === textValue.trim() ? alert('please make an update first') : handlerFunction()}} style={currentDataValue === textValue ? styles.btnDisabled : styles.updateButton}>
      <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: scaledValue(10),
  },
  input: {
    outlineStyle: "none",
    color: "grey",
    fontSize: scaledValue(22),
    margin:scaledValue(12),
    border: 0,
    padding: 10,
  },
  updateButton:{
    backgroundColor:'white',
    alignSelf:'flex-end',
    margin:scaledValue(20),
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
  },
  btnDisabled:{
     opacity:0.3,
     backgroundColor:'white',
     alignSelf:'flex-end',
     margin:scaledValue(20),
     padding:scaledValue(10),
     borderRadius:10,
     shadowOpacity: 0.25,
     shadowRadius: 4,
   
  },
});
