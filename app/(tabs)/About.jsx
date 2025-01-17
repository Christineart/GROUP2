import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function About() {
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
    <View>
      <Text>About</Text>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
      width:100,
      height:100,
  }
})