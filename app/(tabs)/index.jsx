import { View, Text, Button, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';

// Importing flag images (Assuming you have these images in your assets directory)
const flags = [
  require('./../../assets/images/flag1.png'),
  require('./../../assets/images/flag2.png'),
  require('./../../assets/images/flag4.png'),
  require('./../../assets/images/flag5.png'),
  require('./../../assets/images/flag6.png'),
  // Add more flag images as needed
];

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./../../assets/images/logo.png')} style={styles.image} />
      </View>

      <Text style={styles.indexText}>Welcome to Wonder World!</Text>

      <FlatList
        data={flags}
        horizontal
        renderItem={({ item }) => (
          <Image source={item} style={styles.flag} />
        )}
        keyExtractor={(item, index) => index.toString()} // Use index as key, or implement unique identifiers
        showsHorizontalScrollIndicator={false}
      />

      <Button title='Logout' onPress={() => signOut(auth)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8', // Background color of the landing page
  },
  logoContainer: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  indexText: {
    fontSize: 20,
    marginBottom: 20,
  },
  flag: {
    width: 50, // Customize the size of the flags
    height: 30,
    marginHorizontal: 5,
  },
});
