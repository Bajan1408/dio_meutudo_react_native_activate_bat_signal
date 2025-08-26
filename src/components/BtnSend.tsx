import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function BtnSend() {
    return (
        <View style={styles.container}>
            <Text style={styles.btnSend}>Send</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 40,
        backgroundColor: '#ffc90e',
        borderRadius: 5, 
        marginTop: 20,
        borderColor: '#000',
        borderWidth: 2
    },
    btnSend: {
        fontSize: 23,
        fontWeight: 600,
        color: '#000' 
    }
})