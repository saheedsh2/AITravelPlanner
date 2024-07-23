import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

const StartNewTripCard = () => {
    const router = useRouter();
  return (
    <View style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:25

    }}>
      <Ionicons name="location" size={30} color={Colors.PRIMARY} />
      <Text style={{
        fontSize:25,
        fontFamily:'outfit-bold',
        marginTop: 10
      }}> No Trips Planned Yet</Text>

<Text style={{
        fontSize:25,
        fontFamily:'outfit',
        marginTop: 10,
        textAlign:'center',
        color: Colors.GRAY
      }}> Its time to plan your next trip. Check out one of the most conducive places for travel</Text>
      <TouchableOpacity 
       onPress={() => router.push('/create-trip/search-place')}
      style={{
        padding: 15, 
        backgroundColor:Colors.PRIMARY,
        borderRadius: 15,
        paddingHorizontal: 30
        }}>
        <Text style={{
            color:Colors.WHITE,
            fontFamily:'outfit-medium',
            fontSize: 20
        }}>Start New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard

const styles = StyleSheet.create({})