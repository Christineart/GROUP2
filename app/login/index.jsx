import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Constant/Colors'
import { useRouter } from 'expo-router'

export default function LoginScreen() {

  const router=useRouter();

  return (
    <View>
      <View style={{
        display:'flex',
        alignItems:'center',
        marginTop:220,
      }}>
        <Image source={require('./../../assets/images/logo.png')}
            style={styles.image}
        />
      </View>
      <View style={{
        alignItems:'center',
        padding:20,
        backgroundColor:Colors.PRIMARY
      }}>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
          fontStyle:'italic',
        }}>Embrace Everyone's Uniqueness</Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('login/SignIn')}
        >

            <Text style={{
              textAlignment:'center',
              fontSize:20,
              color:Colors.PRIMARY,
            }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width:300,
        height:300,
    },
    button:{
      padding:20,
      backgroundColor:'black',
      borderRadius:99,
      marginTop:45,
    }
})