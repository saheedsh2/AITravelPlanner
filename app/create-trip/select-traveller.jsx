import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravellerList } from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import { useContext } from 'react';
import { CreateTripContext } from '../../context/CreateTripContext';
const SelectTraveller = () => {

    const navigation = useNavigation();

    const [selectedTraveller, setSelectedTraveller] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext)


    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: ''
        })

    },[])

    useEffect(() => {
        setTripData({...tripData,
            travellerCount:selectedTraveller
        })
    },[selectedTraveller])

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
     <Text style={{
        fontSize: 35,
        fontFamily:'outfit-bold',
        marginTop: 20
     }}>Who is Travelling?</Text>

     <View>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize: 20,
            marginTop: 23
        }}>Choose Your Travellers</Text>

        <FlatList 
        data={SelectTravellerList}
        renderItem={({item,index}) => (
            <TouchableOpacity onPress={() => setSelectedTraveller(item.title)} style={{
                marginVertical:10
            }}>
            <OptionCard option={item} selectedTraveller={selectedTraveller}/>
            </TouchableOpacity>
        )}

        />
     </View>
    </View>
  )
}

export default SelectTraveller