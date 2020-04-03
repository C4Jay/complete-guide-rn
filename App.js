import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 60}}>
     <View>
       <TextInput placeholder="Course Goals" style={{borderColor: 'grey', borderWidth: 1, padding: 10}}></TextInput>
       <Button title="create"></Button>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
