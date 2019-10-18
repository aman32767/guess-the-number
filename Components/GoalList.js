import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

const goalList = (props) => {
    return(
     
        <TouchableOpacity  onLongPress={props.pressed.bind(this,props.id)}>
        <View style={styles.listItem}>
            <Text>{props.value}</Text>
        </View>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
    }
})

export default goalList