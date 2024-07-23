import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

const Login = () => {

  const router = useRouter();




  return (
    <View>
      <Image source={require('./../assets/images/travells.png')}
        style={{width: '100%', height: 550}}
      />

      <View style={styles.container}>
        <Text
        style={{
          fontSize: 30,
          fontFamily: 'outfit-bold',
          textAlign: 'center',
          marginTop: 10
        }}
        >AI Travel Planner</Text>
        
          <Text 
          style={{
            fontFamily: 'outfit',
            fontSize: 17,
            textAlign: 'center',
            color: Colors.GRAY,
            marginTop: 20
          }}
          >Discover your next adventure at your fingertips</Text>

          <TouchableOpacity style={styles.button} 
          
          onPress={() => router.push('auth/sign-in')}
          >
            <Text style={{color:Colors.WHITE,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 17

            }}>Get Started</Text>
          </TouchableOpacity>
        
       
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

  container:{
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius:30, 
    height: '100%',
    padding: 25,
    

  },
  button:{
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '20%'

  }
})