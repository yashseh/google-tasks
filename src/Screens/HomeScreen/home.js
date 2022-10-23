import { StyleSheet, Text, View,FlatList,Keyboard } from 'react-native'
import React,{useRef,useState} from 'react'
import Card from '../../Components/card/card';
import { scaledValue } from '../../Utils/styles.common';
import BottomButton from '../../Components/footerButton/bottomButton';
import { useNavigation } from '@react-navigation/native';
import { BottomSheet } from '../../Components/botttmSheet/bottomSheet';
import { notesArr } from '../../Utils/data';
import { ScrollView } from 'react-native-gesture-handler';
const Home = () => {
  const modalizeRef = useRef();
  const [textValue,setTextValue] = useState();

  const [notes,setNotes] = useState(false);
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const navigation = useNavigation();
  const executeTasks = () =>{
    notesArr.push(textValue)
    modalizeRef.current.close();
    Keyboard.dismiss
    setTextValue('')
  }



  const onClose = () =>{
    modalizeRef.current.close();
  }


  const deleteNote = (i,val) => {
    const index = notesArr.indexOf(val);
    if (index > -1) {
      notesArr.splice(index, 1);
      setNotes(!notes);
    }
    return notesArr
  }

  return (
    <View style={styles.mainContainer}>
        {notesArr.length === 0 ? 
        <View style={styles.emptyArr}>
          <Text>No notes please click on plus button to create one</Text>
        </View> :
        <ScrollView
      style={{padding:scaledValue(10)}}
      >
      {
        notesArr.map((elem,index)=>{
          return(
            
            <Card deleteButton={()=>deleteNote(index,elem)} onCardPress={()=>navigation.navigate('noteDetails',{
            noteIndex:index
            })} key={index} text={elem}/>
          )
        })}
        </ScrollView>
        }
      <BottomButton onButtonPress={()=>onOpen()}/>
      <BottomSheet  handelTextChange={(e)=>{setTextValue(e.trim())}} addButton={()=>{ textValue?.length !== 0 ? executeTasks() : alert('please enter a text')}} modalizeRef={modalizeRef}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    mainContainer:{
     flex:1,
     marginHorizontal:scaledValue(10),
    },
    emptyArr:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
})