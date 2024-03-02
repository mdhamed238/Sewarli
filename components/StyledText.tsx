import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import colors from '../constants/colors';
import i18n from '../lib/locales/i18n';
import i18next from 'i18next';

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

const frenchFontMap = {
  light: 'DMSans-Light',
  normal: 'DMSans-Regular',
  medium: 'DMSans-Medium',
  semibold: 'DMSans-SemiBold',
  bold: 'DMSans-Bold',
  extrabold: 'DMSans-ExtraBold',
  black: 'DMSans-Black',
};
const arabicFontMap = {
  light: 'Cairo-Light',
  normal: 'Cairo-Regular',
  medium: 'Cairo-Medium',
  semibold: 'Cairo-SemiBold',
  bold: 'Cairo-Bold',
  extrabold: 'Cairo-ExtraBold',
  black: 'Cairo-ExtraBold',
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
      fontFamily:
        i18n.language === 'ar'
          ? arabicFontMap[fontWeight]
          : frenchFontMap[fontWeight],

      // textAlign: i18next.language === 'ar' ? 'right' : 'left',
    },
  });

  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default StyledText;
