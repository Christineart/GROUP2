import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import {Redirect} from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'

export default function index() {
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
      <Text>index</Text>
      <Button title='Logout' onPress={()=>signOut(auth)}/>
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

