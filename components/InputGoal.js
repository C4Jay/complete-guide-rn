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
    <View style={styles.btnview}>
    <View style={styles.btn}>
    <Button style={{padding: 10}}
    onPress={props.clicked/* inputGoalHandler */}
    title="create"></Button>
    </View>
    <View style={styles.btn}>
    <Button style={{margin: 5}} color="red" onPress={props.cancelclick} 
    title="back"></Button>
    </View>
    </View>
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
      },
      btn: {
        width: '58%'
      },
      btnview: {
        width: '36%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      }
})

export default InputGoal;