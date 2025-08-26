import { Image, StyleSheet } from 'react-native';
import logo from '../../assets/logo_batman.png';

export default function Logo() {
    return (
        <>
            <Image source={logo} style={styles.logo} />
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 100, 
        height: 75, 
        alignSelf: 'center', 
        marginTop: 50
    }
})