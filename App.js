import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ItemGoal from './components/ItemGoal';
import InputGoal from './components/InputGoal';

export default function App() {
  const [inputGoal, setinputGoal] = useState('')
  const [courseGoals, setcourseGoals] = useState([])
  const [showtoggle, setshowtoggle] = useState(false)

  const inputHandler = (textInput) => {
    setinputGoal(textInput)
  }

  const inputGoalHandler = () => {
    setcourseGoals(currentGoals => [...courseGoals, {/* key: */ id: Math.random().toString(), value: inputGoal}])
    setshowtoggle(false)
    setinputGoal('')
  }

  const deleteGoalHandler = (idgoal) => {
    setcourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != idgoal); 
    })
  }

  const cancelHandler = () => {
    setshowtoggle(false)
  }

/*   const showtoggleHandler = () => {
    setshowtoggle(true)
  } */


  return (
    <View style={styles.screen}>
     <Button color="yellowgreen" title="Create goal" onPress={() => setshowtoggle(true)}></Button> 
     <InputGoal show={showtoggle} cancelclick={cancelHandler} clicked={inputGoalHandler} onchangefield={inputHandler}></InputGoal>

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
