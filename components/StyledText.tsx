import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import colors from '../constants/colors';

type StyledTextProps = {
  text: string;
  color?: string;
  fontSize?: number;
  fontWeight?:
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  style?: StyleProp<TextStyle>;
};

const fontMap = {
  light: 'DMSans-Light',
  normal: 'DMSans-Regular',
  medium: 'DMSans-Medium',
  semibold: 'DMSans-SemiBold',
  bold: 'DMSans-Bold',
  extrabold: 'DMSans-ExtraBold',
  black: 'DMSans-Black',
};

const StyledText: React.FC<StyledTextProps> = ({
  text,
  color = colors.white,
  fontSize = 16,
  fontWeight = 'normal',
  style = {},
}) => {
  const styles = StyleSheet.create({
    text: {
      color,
      fontSize,
      fontFamily: fontMap[fontWeight],
    },
  });

  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default StyledText;
