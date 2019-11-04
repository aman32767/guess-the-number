import React, { useState } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './Screens/StartGameScreen'

export default function App() {

  return (
    <View style={styles.screen}>
     <Header title="Guess The Number.."/>
     <StartGameScreen title = "Start a new game" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  }
});
