import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';
import Color from '../Constants/Colors';
import Input from '../components/Input';
const StartGameScreen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedNumber, setConfirmedNumber] = useState('');
  const numberChangeHandler = inputText => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const buttonResetHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);
  };

  const buttonConfirmHandler = () => {
    const currentNumber = parseInt(enteredNumber);
    if (isNaN(currentNumber) || currentNumber <= 0 || currentNumber > 99) {
      Alert.alert('Dang!!', 'Input must be a number between 1-99.', [
        { text: 'Okay',style:"cancel" ,onPress: buttonResetHandler }
      ]);
      return;
    }
    setConfirmed(true);
    setConfirmedNumber(currentNumber);
    setEnteredNumber('');
    Keyboard.dismiss();
  };
  let selectedNumber = null;
  if (confirmed === true) {
    selectedNumber =(
      <Card style={styles.summaryContainer}> 
        <Text>YOUR NUMBER :  </Text>
        <NumberContainer>{confirmedNumber}</NumberContainer>
        <Button title="START GAME"/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ fontSize: 20, marginVertical: 10 }}>{props.title}</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            blurOnSubmit
            maxLength={2}
            onChangeText={numberChangeHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={{ width: 100 }}>
              <Button
                title="RESET"
                color={Color.accent}
                onPress={buttonResetHandler}
              />
            </View>
            <View style={{ width: 100 }}>
              <Button
                title="CONFIRM"
                color={Color.primary}
                onPress={buttonConfirmHandler}
              />
            </View>
          </View>
        </Card>
        {selectedNumber}
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  inputContainer: {
    width: 300,
    alignItems: 'center',
    maxWidth: '80%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  input: {
    textAlign: 'center',
    width: 30
  },
  summaryContainer:{
    marginVertical:20,
    alignItems:'center'
  }
});

export default StartGameScreen;
