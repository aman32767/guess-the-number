import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
const generateRandomNumberBetween = (min,max,exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor()*(max-min)+min;
    if(randomNumber === exclude)
    {
        return;
    }else{
        return randomNumber;
    }
}

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
      generateRandomNumberBetween(1,100,props.userChoice)
  )
  return(
      <View>
          <Text>Opponent's Number</Text>
          <NumberContainer>
              {currentGuess}
          </NumberContainer>
          <Card style={styles.buttonContainer}>
              <Button title="LOWER" onPress={()=>{}} />
              <Button title="GREATER" onPress={() => { }} />
          </Card>
      </View>
  )
}
const styles = StyleSheet.create({
     buttonContainer:{
         flexDirection:'row',
         width:300,
         maxWidth:'80%'
     }
});

export default GameScreen ;