import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const goalInput = props => {
  const [enteredGoal, setenteredGoal] = useState('');
  const inputChangeHandler = inputGoal => {
    setenteredGoal(inputGoal);
  };

  const addGoalHandler = () => {
    props.addGoal(enteredGoal);
    setenteredGoal('');
  };
  return (
    <Modal visible={props.isModalAdded} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="New Task"
          style={styles.input}
          onChangeText={inputChangeHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" color="green" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.isCancelled  }  styles />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default goalInput;
