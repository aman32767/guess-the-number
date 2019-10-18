import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalList from './Components/GoalList';

import GoalInput from './Components/GoalInput';

export default function App() {
  const [courseGoal, setcourseGoal] = useState([]);
  const [isaddModal, setisaddModal] = useState(false);

  const addGoalHandler = inputGoal => {
    if(inputGoal === '')
    {
      alert('No task to add!')
    }
    if (inputGoal !== '') {
      setcourseGoal(prevState => [
        ...prevState,
        { key: Math.random().toString(), value: inputGoal }
      ]);
      setisaddModal(false);
    }
  };

  const deleteItemHandler = goalId => {
    setcourseGoal(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setisaddModal(false);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.mainButton}>
        <Button
          title="Want to add task ? "
          onPress={() => setisaddModal(true)}
        />
      </View>
      <GoalInput
        isModalAdded={isaddModal}
        addGoal={addGoalHandler}
        isCancelled={cancelGoalHandler}
      />
      <FlatList
        data={courseGoal}
        renderItem={itemData => (
          <GoalList
            id={itemData.item.key}
            pressed={deleteItemHandler}
            value={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  mainButton: {
    marginVertical: 20
  }
});
