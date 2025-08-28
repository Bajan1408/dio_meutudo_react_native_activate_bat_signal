import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import  handleBtn  from '../../App';

type Props = {
    onPressContinue: () => void;
}

export default function BtnActivateBatSignal({ onPressContinue }: Props) {
    
    return (
        <TouchableOpacity onPress={() => { onPressContinue() }}>
            <View style={styles.container}>
                <Text style={styles.btnActivate}>Activate Bat Signal</Text>
            </View>
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 40,
        backgroundColor: '#ffc90e',
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 3
    },
    btnActivate: {
        fontSize: 23,
        fontWeight: 700,
        color: '#000'
    }
})