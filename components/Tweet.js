import {View, StyleSheet, Text, Image, TouchableOpacity, Alert, ScrollView} from 'react-native'
import React, {useState} from 'react'

const Tweet = () => {
    return (

        <View style={styles.container}>

            <View style={styles.containeruser}>
                <Text style={styles.nombre}>Jesus</Text>
                <Text style={styles.username}>@Jesus</Text>
                <Text style={styles.fecha}>hace 2 minutos</Text>
            </View>

            <Text style={styles.content}>Texto de prueba</Text>
          </View>

    )

}

export default Tweet


const styles =StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lightblue",
        textAlign: 'left',
        padding: 10,
        marginBottom: 20,
        marginTop: 20,
        width: 400
    
      },
      containeruser: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'left',
        width: 350
        
      },
      containerpd: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 350
        
      },
      nombre: {
        fontSize: 18,
        color: "white",
        marginBottom: 0,
        fontWeight: 'bold',
        padding: 10,
    
      },
      username: {
        fontSize: 15,
        color: "white",
        marginBottom: 0,
        padding: 10,
    
      },
      content: {
        fontSize: 15,
        color: "black",
        padding: 10,
        backgroundColor: 'whitesmoke',
        width: 350
      },
      fecha: {
        fontSize: 12,
        color: "white",
        padding: 10,
        backgroundColor: 'lightblue'
      },
      postdata: {
        fontSize: 18,
        color: "white",
        marginBottom: 0,
        fontWeight: 'bold',
        padding: 10,
    
      },


})