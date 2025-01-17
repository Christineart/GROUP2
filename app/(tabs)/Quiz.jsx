import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function HomeScreen() {
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
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
      width:100,
      height:100,
  }
})