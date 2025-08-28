import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
    onPressReturn: () => void;
}

export default function BtnSend({ onPressReturn }: Props) {
    return (
        <TouchableOpacity onPress={ () => onPressReturn() }>
            <View style={styles.container}>
                <Text style={styles.btnSend}>Send</Text>
            </View>
        </TouchableOpacity>
        
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