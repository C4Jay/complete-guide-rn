import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ItemGoal from './components/ItemGoal';
import InputGoal from './components/InputGoal';

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

     <InputGoal clicked={inputGoalHandler} onchangefield={inputHandler}></InputGoal>

      <FlatList 
      data={courseGoals} 
      renderItem={itemInfo => (
        <ItemGoal item={itemInfo.item.value} itemtext={inputGoal}></ItemGoal>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 60,
  },
  

});
