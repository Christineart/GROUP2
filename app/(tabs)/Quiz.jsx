import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { quizData } from './questions';
import Option from './Option'; // Import the Option component
import Results from './Results';

export default function Quiz() {
  const [questions] = useState(quizData); // Load quiz data directly
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [percentageComplete, setPercentageComplete] = useState(0);

  // Update progress bar as question changes
  const updateProgress = () => {
    setPercentageComplete(((currentQuestionIndex + 1) / questions.length) * 100);
  };

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
  };

  if (showResult) {
    return <Results restart={restart} score={score} />;
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
          <View style={styles.progresswrapper}>
            <View style={[styles.progressBar, { width: `${percentageComplete}%` }]}></View>
            <View style={styles.progresscount}>
              <Text style={styles.percentage}>{Math.floor(percentageComplete)}%</Text>
            </View>
          </View>

          <Text style={{ fontWeight: "500", textAlign: "center" }}>
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
    height: 180,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    alignItems: 'center',
  },
  progresswrapper: {
    width: 70,
    height: 70,
    backgroundColor: '#ABD1C6',
    borderRadius: 50,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 30,
    marginTop: -50,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#004643',
    alignSelf: 'flex-end',
  },
  progresscount: {
    height: 58,
    width: 58,
    borderRadius: 50,
    backgroundColor: '#fff',
    zIndex: 10,
    position: 'absolute',
    top: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontWeight: '600',
    fontSize: 18,
    color: '#004643',
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
