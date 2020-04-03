import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [inputGoal, setinputGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])

  const inputHandler = (textInput) => {
    setinputGoal(textInput)
  }

  const inputGoalHandler = () => {
    setcourseGoals(currentGoals => [...courseGoals, inputGoal])
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
      <View>
       {courseGoals.map(courseGoal => {
         return <Text key={courseGoal}>{courseGoal}</Text>
       })}
     </View>
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
  }

});
