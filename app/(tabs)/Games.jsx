import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ScrollView,
} from 'react-native';

const allFlags = [
  { country: 'Philippines', image: 'https://flagcdn.com/w320/ph.png' },
  { country: 'Japan', image: 'https://flagcdn.com/w320/jp.png' },
  { country: 'Canada', image: 'https://flagcdn.com/w320/ca.png' },
  { country: 'China', image: 'https://flagcdn.com/w320/cn.png' },
  { country: 'Finland', image: 'https://flagcdn.com/w320/fi.png' },
  { country: 'South Korea', image: 'https://flagcdn.com/w320/kr.png' },
  { country: 'Thailand', image: 'https://flagcdn.com/w320/th.png' },
  { country: 'Vietnam', image: 'https://flagcdn.com/w320/vn.png' },
  { country: 'United States', image: 'https://flagcdn.com/w320/us.png' },
  { country: 'Brazil', image: 'https://flagcdn.com/w320/br.png' },
  { country: 'Australia', image: 'https://flagcdn.com/w320/au.png' },
  { country: 'Germany', image: 'https://flagcdn.com/w320/de.png' },
  { country: 'India', image: 'https://flagcdn.com/w320/in.png' },
  { country: 'Italy', image: 'https://flagcdn.com/w320/it.png' },
  { country: 'Mexico', image: 'https://flagcdn.com/w320/mx.png' },
  { country: 'Russia', image: 'https://flagcdn.com/w320/ru.png' },
  { country: 'South Africa', image: 'https://flagcdn.com/w320/za.png' },
  { country: 'United Kingdom', image: 'https://flagcdn.com/w320/gb.png' },
  { country: 'France', image: 'https://flagcdn.com/w320/fr.png' },
  { country: 'Spain', image: 'https://flagcdn.com/w320/es.png' },
];

export default function App() {
  const [level, setLevel] = useState(null);
  const [flags, setFlags] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState('');

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const startLevel = (chosenLevel) => {
    setLevel(chosenLevel);
    const shuffledFlags = shuffleArray([...allFlags]);
    setFlags(shuffledFlags);
    setCurrentIndex(0);
    setScore(0);
    setUserInput('');
  };

  const handleEasyAnswer = (choice) => {
    if (choice === flags[currentIndex].country) {
        const newScore = score + 1;
        setScore(newScore);

        if (currentIndex + 1 < flags.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            Alert.alert('Congratulations!', `You scored ${newScore}!`);
            setLevel(null);
        }
    } else {
        Alert.alert('Wrong Answer!', 'Try again.');
    }
};


const handleMediumAnswer= (choice) => {
  if (choice === flags[currentIndex].country) {
      const newScore = score + 1;
      setScore(newScore);

      if (currentIndex + 1 < flags.length) {
          setCurrentIndex(currentIndex + 1);
      } else {
          Alert.alert('Congratulations!', `You scored ${newScore}!`);
          setLevel(null);
      }
  } else {
      Alert.alert('Wrong Answer!', 'Try again.');
  }
};


const handleHardAnswer= (choice) => {
  if (choice === flags[currentIndex].country) {
      const newScore = score + 1;
      setScore(newScore);

      if (currentIndex + 1 < flags.length) {
          setCurrentIndex(currentIndex + 1);
      } else {
          Alert.alert('Congratulations!', `You scored ${newScore}!`);
          setLevel(null);
      }
  } else {
      Alert.alert('Wrong Answer!', 'Try again.');
  }
};

  if (!level) {
    return (
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
    );
  }

  const mediumChoices = shuffleArray(
    [...flags.map((flag) => flag.country)].filter(
      (country) => country !== flags[currentIndex].country
    )
  ).slice(0, 3);

  mediumChoices.push(flags[currentIndex].country);
  shuffleArray(mediumChoices);

  const easyChoices = shuffleArray([
    flags[currentIndex].country,
    flags[(currentIndex + 1) % flags.length].country,
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => setLevel(null)}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={{ uri: flags[currentIndex].image }} style={styles.flag} />
      <Text style={styles.score}>Score: {score}</Text>
      {level === 'easy' && (
        <View style={styles.easyChoicesContainer}>
          {easyChoices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButtonEasy}
              onPress={() => handleEasyAnswer(choice)}
            >
              <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {level === 'medium' && (
        <View style={styles.mediumChoicesContainer}>
          {mediumChoices.map((choice, index) => (
            <TouchableOpacity
              key={index}
              style={styles.choiceButtonMedium}
              onPress={() => handleMediumAnswer(choice)}
            >
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  flag: {
    width: 300,
    height: 150,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  easyChoicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  choiceButtonEasy: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  mediumChoicesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  choiceButtonMedium: {
    backgroundColor: '#6c757d',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: '40%',
    alignItems: 'center',
  },
  choiceText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
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
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});