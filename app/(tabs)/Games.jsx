import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';

const flags = [
  { country: 'Philippines', image: 'https://flagcdn.com/w320/ph.png' },
  { country: 'Japan', image: 'https://flagcdn.com/w320/jp.png' },
  { country: 'Canada', image: 'https://flagcdn.com/w320/ca.png' },
];

export default function App() {
  const [level, setLevel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');

  const startLevel = (chosenLevel) => {
    setLevel(chosenLevel);
    setCurrentIndex(0);
    setUserInput('');
  };

  const handleEasyAnswer = (choice) => {
    if (choice === flags[currentIndex].country) {
      if (currentIndex + 1 < flags.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        Alert.alert('Congratulations!', 'You completed the Easy Level!');
        setLevel(null);
      }
    } else {
      Alert.alert('Wrong Answer!', 'Try again.');
    }
  };

  const handleMediumAnswer = (choice) => {
    if (choice === flags[currentIndex].country) {
      if (currentIndex + 1 < flags.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        Alert.alert('Congratulations!', 'You completed the Medium Level!');
        setLevel(null);
      }
    } else {
      Alert.alert('Wrong Answer!', 'Retry this flag.');
    }
  };

  const handleHardAnswer = () => {
    if (userInput.trim().toLowerCase() === flags[currentIndex].country.toLowerCase()) {
      if (currentIndex + 1 < flags.length) {
        setCurrentIndex(currentIndex + 1);
        setUserInput('');
      } else {
        Alert.alert('Congratulations!', 'You completed the Hard Level!');
        setLevel(null);
      }
    } else {
      Alert.alert('Wrong Answer!', 'Retry this flag.');
    }
  };

  if (!level) {
    return (
      <View>
      <View style={{
      display:'flex',
      alignItems:'left',
      marginTop:0,
      marginLeft:330,
    }}>
      <Image source={require('./../../assets/images/logo.png')}
          style={styles.image}
      />
    </View>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Difficulty</Text>
        <TouchableOpacity style={styles.button} onPress={() => startLevel('easy')}>
          <Text style={styles.buttonText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => startLevel('medium')}>
          <Text style={styles.buttonText}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => startLevel('hard')}>
          <Text style={styles.buttonText}>Hard</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: flags[currentIndex].image }} style={styles.flag} />
      {level === 'easy' && (
        <View>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleEasyAnswer(flags[currentIndex].country)}>
            <Text style={styles.choiceText}>{flags[currentIndex].country}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.choiceButton}
            onPress={() => handleEasyAnswer('Wrong Choice')}>
            <Text style={styles.choiceText}>Wrong Choice</Text>
          </TouchableOpacity>
        </View>
      )}
      {level === 'medium' && (
        <View>
          {['Philippines', 'Japan', 'Canada', 'USA', 'Brazil'].map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButton}
              onPress={() => handleMediumAnswer(choice)}>
              <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {level === 'hard' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Type your answer"
            value={userInput}
            onChangeText={setUserInput}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleHardAnswer}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width:100,
    height:100,
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  flag: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  choiceButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  choiceText: {
    color: 'white',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
  },
});
