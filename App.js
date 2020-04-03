import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
     <View style={styles.inputfield}>
       <TextInput placeholder="Course Goals" style={styles.textinput}></TextInput>
       <Button title="create"></Button>
     </View>
     <View/>
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
    width: 198
  }

});
