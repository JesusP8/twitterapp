import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

export const ButtonGroup = ({buttons, doSomethingAfterClick}) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Inicio')
       
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Tweets</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Buscar')
        
      }}
      style={styles.button}>
        <Text style={styles.textbutton}>Buscar</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({

    container: {
        //flex: 1,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        
    },
    textbutton: {
        fontSize: 20,
        color: "white",
        marginTop: 50

      },

})