import {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, View,  } from 'react-native';

//Number from 1 - 100


export default function App() {
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<number>();
  const [userFeedback, setUserFeedback] = useState<string>("");
  const [numberOfGuess, setNumberOfGuess] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  
  //Generates random number 
  const reset = () => {

    setNumberOfGuess(0)
    setRandomNumber(Math.floor(Math.random() * 100));
  }
  if (loop == false){
    setRandomNumber(Math.floor(Math.random() * 100));

    setLoop(true)
  };

  const convertGuess = (guess: any) => {
    
    //converting the value of guess from string to an int in base 10
    if (typeof guess === "string"){
      guess = parseInt(guess, 10)
    }


    //setting the users converted to the userGuess variable for use in the checkingGuess function
    setUserGuess(guess)
    return;
  };
  
  //Checks if the users guess was higher, lower or equal to the randomly generated number, providing feedback
  
  const checkingGuess = (guess:any, guessNumb:any) => {
    
    //Increases user guess count as they go
    guessNumb++
    setNumberOfGuess(guessNumb)

    if (guess > randomNumber) {
      setUserFeedback("Too high, try again")
    } 
    if (guess < randomNumber){
      setUserFeedback("Too low, try again")
    }
    if (guess == randomNumber){
      setUserFeedback("Correct")
    }
    return;
  };

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <TouchableOpacity style={styles.button}
        onPress={reset}
      > 
        <Text style={styles.buttonText}>Reset Game</Text>
      </TouchableOpacity>

      <TextInput style={styles.input}
        placeholder={"Guess your number:"}
        onChangeText={value => convertGuess(value)}
        inputMode={'numeric'}
      
      />
      <TouchableOpacity style={styles.button}
        onPress={()=> checkingGuess(userGuess, numberOfGuess)}
      > 
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
      </View>
      <Text>Total guesses: {numberOfGuess}</Text>
      <Text>{userFeedback}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    margin: 10,
    height: 50,
    backgroundColor: "#004A66"
  },
  buttonText: {
    flex: 1,
    padding: 10,
    alignSelf: "center",
  },
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});