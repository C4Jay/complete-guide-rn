import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [inputGoal, setinputGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])

  const inputHandler = (textInput) => {
    setinputGoal(textInput)
  }

  const inputGoalHandler = () => {
    setcourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: inputGoal}])
  }


  return (
    <View style={styles.screen}>
     <View style={styles.inputfield}>
       <TextInput 
       onChangeText={inputHandler} 
       placeholder="Course Goals" 
       style={styles.textinput}
       value={inputGoal}>
       </TextInput>
       <Button
       onPress={inputGoalHandler}
       title="create"></Button>
     </View>
      <FlatList 
      data={courseGoals} 
      renderItem={itemInfo => (
        <View style={styles.list}><Text >{itemInfo.item.value}</Text></View>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 60,
  },
  inputfield: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textinput: {
    borderColor: 'grey', 
    borderWidth: 1, 
    padding: 3, 
    width: '80%'
  },
  list: {
    padding: 10,
    backgroundColor: '#c7c6bf',
   /*  borderColor: 'purple',
    borderWidth: 1, */
    margin: 3
  }

});
