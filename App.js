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
    setcourseGoals(currentGoals => [...courseGoals, {/* key: */ id: Math.random().toString(), value: inputGoal}])
  }

  const deleteGoalHandler = (idgoal) => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != idgoal); 
    })
  }


  return (
    <View style={styles.screen}>

     <InputGoal clicked={inputGoalHandler} onchangefield={inputHandler}></InputGoal>

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemInfo => (
        <ItemGoal item={itemInfo.item.value} itemtext={inputGoal} deleteHandler={() => deleteGoalHandler(itemInfo.item.id)}></ItemGoal>
      )}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen : {
    padding: 60,
  },
  

});
