import React from 'react';
import {View,Text , StyleSheet} from 'react-native';
import Color from '../Constants/Colors'
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        backgroundColor:Color.primary,
        padding:36,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'black',
        fontSize:18
    }
})

export default Header;