
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import batSignal from '../../assets/bat-signal.png';


export default function BatSignal() {
    return (
        <View>
            <Image source={batSignal} style={styles.batSignal} />
        </View>
    )
}


const styles = StyleSheet.create({
    batSignal: {
        width: 250,
        height: 250,
        resizeMode: 'stretch',
        borderRadius: '50%',
        marginBottom: 120
    }
})

