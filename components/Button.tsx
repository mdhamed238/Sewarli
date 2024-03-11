import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import colors from '../constants/colors';
import StyledText from './StyledText';

type ButtonProps = {
  variant?: 'outline' | 'solid';
  onPress: () => void;
  fullWidth?: boolean;
  text: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button = ({
  variant = 'solid',
  onPress,
  text,
  icon,
  fullWidth,
  style = {},
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'outline' ? styles.outline : styles.solid,
        fullWidth ? styles.fullWidth : {},
        style,
      ]}
      onPress={onPress}>
      {icon && icon}
      <StyledText
        text={text}
        fontSize={14}
        fontWeight="bold"
        color={variant === 'outline' ? colors.primaryVarient : colors.white}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.primaryVarient,
    backgroundColor: 'transparent',
  },
  solid: {
    backgroundColor: colors.primary,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#FFE9BB',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Button;
