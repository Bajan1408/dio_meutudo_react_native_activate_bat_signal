import React from "react";
import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import BtnSend from "../components/BtnSend";

type Props = {
    onPressReturn: () => void;
    style?: {}
}

export default function FormScreen({ onPressReturn }: Props) {
    return (
        <View style={styles.container}>
            <Logo />
            <Form />
            <BtnSend onPressReturn={onPressReturn}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: -30
    }
})