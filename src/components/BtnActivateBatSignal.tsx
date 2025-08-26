import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function BtnActivateBatSignal() {
    return (
        <View style={styles.container}>
            <Text style={styles.btnActivate}>Activate Bat Signal</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 40,
        backgroundColor: '#567474',
        borderRadius: 5
    },
    btnActivate: {
        fontSize: 23,
        fontWeight: 600,
        color: '#fff'
    }
})