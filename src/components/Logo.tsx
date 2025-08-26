import { Image } from 'react-native';
import logo from '../../assets/logo_batman.png';

export default function Logo() {
    return (
        <>
            <Image source={logo} style={{width: 130, height: 100}} />
        </>
    )
}