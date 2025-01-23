import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { quizData } from '../../components/questions';
import Option from '../../components/Option'; // Import the Option component
import Results from '../../components/Results';

// Fisher-Yates shuffle function to randomize the questions
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Shuffle questions when the component is mounted or when restarting the quiz
  useEffect(() => {
    setQuestions(shuffleArray(quizData)); // Shuffle questions when the quiz starts or restarts
  }, []);

  const handleNext = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(""); // Reset selected option
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setSelectedOption(""); // Reset selection on restart
    setQuestions(shuffleArray(quizData)); // Shuffle questions on restart
  };

  // Handle the case where questions are not yet loaded
  if (showResult) {
    return <Results restart={restart} score={score} />;
  }

  // Ensure we only access questions when they are loaded
  if (!questions.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text> {/* Display loading message until questions are available */}
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={styles.countwrapper}>
          <Text style={{ fontWeight: "600" }}>
            {currentQuestionIndex + 1}/{questions.length}
          </Text>
        </View>

        <View style={styles.questionwrapper}>
          <Text style={styles.questionText}>
            {currentQuestion.question}
          </Text>
        </View>

        <View style={styles.optionswrapper}>
          {currentQuestion.options.map((option, index) => (
            <Option
              key={index}
              option={option}
              isSelected={selectedOption === option}
              checkIfSelected={() => setSelectedOption(option)}
              setSelectedOption={setSelectedOption}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={styles.btn}
          disabled={!selectedOption}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Next</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4e4',
    padding: 20,
  },
  countwrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  questionwrapper: {
    marginTop: 60,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15, // Adjusted for better spacing
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 18,  // Adjusted font size for readability
    color: '#333', // Slightly darker color for contrast
    lineHeight: 24, // Increased line height to make text more readable
  },
  optionswrapper: {
    marginTop: 40,
    width: '100%',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 16,
    backgroundColor: '#004643',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
