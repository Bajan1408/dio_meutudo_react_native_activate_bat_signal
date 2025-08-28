import React from "react";
import { View } from 'react-native';
import BatSignal from "../components/BatSignal";
import BtnActivateBatSignal from "../components/BtnActivateBatSignal";

type Props = {
    onPressContinue: () => void;
}

export default function Home({ onPressContinue }: Props) {
    return (
        <View style={{ alignItems: 'center' }}>
            <BatSignal />
            <BtnActivateBatSignal onPressContinue={onPressContinue} />
        </View>
    )
}