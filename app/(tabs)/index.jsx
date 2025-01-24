import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated, ScrollView } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';

export default function LandingPage() {
  const scrollViewRef = useRef(null);
  const animationValue = new Animated.Value(0);

  // Automatic scrolling effect
  useEffect(() => {
    const scrollToEnd = () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: false });
        setTimeout(() => {
          scrollViewRef.current.scrollTo({ y: flags.length * 120, animated: true });
        }, 100);
      }
    };

    const timer = setInterval(() => {
      scrollToEnd();
    }, 3000); // Adjust time as needed for scrolling

    return () => clearInterval(timer);
  }, []);

  const flags = [
    require('../../assets/images/phflag.png'),
    require('../../assets/images/money.jpg'),
    require('../../assets/images/lang.png'),
    require('../../assets/images/lang2.png'),
    require('../../assets/images/pera1.jpg'),
    require('../../assets/images/thaiflag.png'),
    require('../../assets/images/pera2.jpg'),
    require('../../assets/images/lang3.jpg'),
    // Add more flags as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      </View>

      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollView}
      >
        {flags.map((flag, index) => (
          <Image key={index} source={flag} style={styles.flagImage} />
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Text style={styles.indexText}>Welcome to the Wander World!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginLeft: 300,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  scrollView: {
    width: '100%',
    height: 400, // Adjust height based on desired space for the scroll
  },
  flagImage: {
    width: 350,  // Fixed width for all images
    height: 200, // Fixed height for all images
    marginVertical: 10, // Margin between images
    alignSelf: 'center', // Center images horizontally
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  indexText: {
    marginBottom: 10,
  },
});
