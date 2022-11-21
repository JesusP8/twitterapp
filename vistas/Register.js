import React from "react";
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, TextInput} from "react-native";


const Register = ({navigation}) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Registrarse
            </Text>

            <TextInput
            style={styles.tinput1} 
            keyboardType='default'
            placeholder='Nombre Completo'
            placeholderTextColor= 'black'/>

            <TextInput
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Username'
            placeholderTextColor= 'black'/>

            <TextInput
            style={styles.tinput} 
            keyboardType='email-address'
            placeholder='Correo Electronico'
            placeholderTextColor= 'black'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Contraseña'
            placeholderTextColor= 'black'/>

            <TextInput
            secureTextEntry={true} 
            style={styles.tinput} 
            keyboardType='default'
            placeholder='Confirmar Contraseña'
            placeholderTextColor= 'black'/>

            <TouchableOpacity
                onPress={() => { 
                    navigation.navigate('Home')
                    Alert.alert('Registro Satisfactorio')
                }}
                style={styles.button}>
                    <Text style={styles.textbutton}>
                    Registrarse
                    </Text>
            </TouchableOpacity>

            

        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    
      },
      title: {
        fontSize: 50,
        color: "white",
        marginBottom: 50
    
      },
      tinput1: {
        height: 40,
        marginTop: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white",

      },
      tinput: {
        height: 40,
        marginTop: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: "black",
        height: 50, 
        width: 250,
        borderRadius: 40,
        backgroundColor: "white"
        
      },
      button: {
        backgroundColor: "black",
        padding: 10,
        marginTop: 30,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        height: 50, 
        width: 150,
      
      },
      textbutton: {
        fontSize: 20,
        color: "white",
        
      },
      textf: {
        fontSize: 15,
        color: "white",
        marginTop: 20,
      }


});

export default Register