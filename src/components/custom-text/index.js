import React from 'react';
import { useFonts, ArchitectsDaughter_400Regular } from "@expo-google-fonts/architects-daughter";
import { CText } from '../../styles';

export default function CustomText({ children, size, color }) {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CText
      size={size}
      color={color}
      style={{ fontFamily: 'ArchitectsDaughter_400Regular' }}
    >
      {children}
    </CText>
  );
}