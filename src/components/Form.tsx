import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";


export default function Form() {
    return (
        <View style={styles.container}>
            <label style={styles.label}>Nome</label>
            <TextInput placeholder="Digite seu nome" style={styles.textInput} />

            <label style={styles.label}>Telefone</label>
            <TextInput placeholder="Digite seu telefone" style={styles.textInput} />

            <label style={styles.label}>Endereço</label>
            <TextInput placeholder="Digite seu endereço completo" multiline={true} style={[styles.textInput, styles.addressInput]} />

            <label style={styles.label}>Ocorrência</label>
            <TextInput placeholder="Informe a ocorrência em detalhes" multiline={true} style={[styles.textInput, styles.occurrenceInput]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center', 
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5
    }, 
    label: {
        marginLeft: 10, 
        marginTop: 10,
        alignSelf: 'flex-start'
    },
    textInput: {
        width: '96%', 
        height: 40, 
        borderWidth: 2, 
        borderRadius: 5, 
        borderColor: '#000',  
        padding: 5,
        textAlignVertical: 'top'
    },
    addressInput: {
        height: 120
    }, 
    occurrenceInput: {
        height: 140
    }
    
})