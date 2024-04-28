import React from 'react';
import { useFonts, ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import { IconButton, InputContainer, InputText } from "../../styles";
import CustomText from "../custom-text";
import { FontAwesome } from '@expo/vector-icons';

export default function InputField({ char, value, onChangeText }) {

    let [fontsLoaded] = useFonts({
        ArchitectsDaughter_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <InputContainer>
            <CustomText>{char} = </CustomText>
            <InputText
                placeholder={'?'}
                value={value}
                onChangeText={onChangeText}
                style={{ fontFamily: 'ArchitectsDaughter_400Regular' }}
            />
            <IconButton onPress={() => onChangeText("")}>
                <FontAwesome name="eraser" size={18} color="black" />
            </IconButton>

        </InputContainer>
    );
}