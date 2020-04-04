import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'

const ItemGoal = (props) => {
    return (
        <TouchableOpacity onPress={props.deleteHandler}>
           <View style={styles.list}>
             <Text >{props.item}</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: '#c7c6bf',
       /*  borderColor: 'purple',
        borderWidth: 1, */
        margin: 3
      }
})

export default ItemGoal;