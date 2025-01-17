import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, useRouter,  } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';

export default function TabLayout() {

    const router=useRouter();
    //if user login or not

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid)
          // ...
        } else {
            router?.push('/login')
          // User is signed out
          // ...
        }
      })
      
  return (
    <Tabs screenOptions= {{
        headerShown:false,
        tabBarStyle: {
            backgroundColor: '#f5f5f5', // Light gray background
            borderTopWidth: 2, // Add border
            borderTopColor: '#ccc', // Border color
            height: 70, // Increase height for more space
          },
          tabBarActiveTintColor: '#007BFF', // Active tab color
          tabBarInactiveTintColor: '#888', // Inactive tab color
        }}
      >
        <Tabs.Screen name='index'
            options={{
                tabBarLabel:'Home',
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="home" size={size} color={color} />
                )
            }}
    />
        <Tabs.Screen name='Explore'
            options={{
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="travel-explore" size={size} color={color} />
                )
            }}
    />
        <Tabs.Screen name='Quiz'
            options={{
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="quiz" size={size} color={color} />
                )
            }}
    />
        <Tabs.Screen name='Games'
            options={{
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="videogame-asset" size={size} color={color} />
                )
            }}
    />
        <Tabs.Screen name='About'
            options={{
                tabBarIcon:({color, size})=>(
                    <MaterialIcons name="info" size={size} color={color} />
                )
            }}
    />
    </Tabs>
  )
}