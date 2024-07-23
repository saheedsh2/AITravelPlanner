import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

import { auth } from './../../../configs/FirebaseConfigs';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const navigation = useNavigation();

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [fullname,setFullname] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    },[])

    const router = useRouter();


    const OnCreateAccount = () => {
        if(!email && !password && !fullname)
        {
            ToastAndroid.show('Please check entries', ToastAndroid.BOTTOM);
            return ;
        }

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage,errorCode);
    // ..
  });

    }






  return (
    <View style={{
        padding: 25, 
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: '100%'}}>

<TouchableOpacity onPress={() => router.back()}>

<Ionicons name="arrow-back-circle-sharp" size={24} color="black" />


</TouchableOpacity>


      <Text
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            marginTop: 30
        }}
      >Create a New Account</Text>

      {/* FullName */}

      <View style={{marginTop: 50}}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Fullname</Text>
            <TextInput 
            placeholder='Enter Fullname' 
            style={styles.input}
            onChangeText={(value) => setFullname(value)}
            
            />
        </View>


        {/* Email  */}

        <View style={{marginTop: 20}}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Email</Text>
            <TextInput placeholder='Enter Email' 
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            />
        </View>

        {/* Password  */}

        <View style={{marginTop: 20}}>
            <Text style={{
                fontFamily: 'outfit'
            }}>Password</Text>
            <TextInput placeholder='Password' 
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            />
        </View>


        
        <TouchableOpacity onPress={OnCreateAccount} style={{
            padding:20,
            backgroundColor:Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 50

        }}>
            <Text style={{
                color:Colors.WHITE,
                textAlign: 'center'
            }}>Create Account</Text>
        </TouchableOpacity>

        {/* Create Account  Button */}

        <TouchableOpacity 
        onPress={() => router.replace('auth/sign-in')}
        
        style={{
            padding:20,
            backgroundColor:Colors.WHITE,
            borderRadius: 15,
            marginTop: 20,
            borderWidth: 1,


        }}>
            <Text style={{
                color:Colors.PRIMARY,
                textAlign: 'center'
            }}>Sign In</Text>
        </TouchableOpacity>


    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    input:{
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.GRAY,
        fontFamily: 'outfit'
    }
})