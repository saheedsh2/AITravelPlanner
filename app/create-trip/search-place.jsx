import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from '../../context/CreateTripContext'
const SearchPlace = () => {
    const navigation = useNavigation();

    const {tripData, setTripData} = useContext(CreateTripContext)


    useEffect(() => {
        navigation.setOptions({
            headerShown:true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    },[])

    const router = useRouter()

    useEffect(()=> {
        console.log(tripData);
    },[tripData])

  return (
    <View style={{
        padding: 25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      

      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log(data.description);
        // console.log(details?.geometry.location);
        // console.log(details?.photos[0]?.photo_reference);
        // console.log(details?.url);
        setTripData({
            locationInfo:{
                name:data.description,
                coordinates:details?.geometry.location,
                photoRef:details?.photos[0]?.photo_reference,
                url:details?.url

            }
        });
        router.push('/create-trip/select-traveller')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25

        }
      }}
    />





    </View>
  )
}

export default SearchPlace

const styles = StyleSheet.create({})