import React from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const InputGoal = (props) => {
    return (
    <Modal visible={props.show} animationType="slide">
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
  </Modal>
)}

const styles = StyleSheet.create({
    inputfield: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
      },
      textinput: {
        borderColor: 'grey', 
        borderWidth: 1, 
        padding: 3, 
        width: '80%',
        marginBottom: 10
      }
})

export default InputGoal;