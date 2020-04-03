import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const InputGoal = (props) => {
    return (
    <View style={styles.inputfield}>
    <TextInput 
    onChangeText={props.onchangefield/* inputHandler */} 
    placeholder="Course Goals" 
    style={styles.textinput}
    value={props.itemtext}>
    </TextInput>
    <Button
    onPress={props.clicked/* inputGoalHandler */}
    title="create"></Button>
  </View>
)}

const styles = StyleSheet.create({
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
})

export default InputGoal;