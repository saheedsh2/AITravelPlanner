import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const OptionCard = ({option, selectedTraveller}) => {
  return (
    <View style={[{
        padding: 25,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: Colors.LIGHT_GRAY,
        borderRadius: 15
    },selectedTraveller==option.title&&{borderWidth: 3, borderColor: Colors.PRIMARY}]}>
        <View>
      <Text style={{
        fontSize:20,
        fontFamily: 'outfit-bold'

      }}>{option?.title}</Text>

      <Text style={{
        fontSize:17,
        fontFamily: 'outfit',
        color:Colors.GRAY

      }} >{option?.desc}</Text>

    </View>
    <Text style={{
        fontSize: 40,
    }}>{option.icon}</Text>


    </View>
  )
}

export default OptionCard

const styles = StyleSheet.create({})