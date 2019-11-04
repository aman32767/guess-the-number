import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../Constants/Colors';
const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Color.accent,
    padding:10,
    marginVertical:10
  },
  number:{
      fontSize:22,
      color:Color.accent
  }
});

export default NumberContainer;
