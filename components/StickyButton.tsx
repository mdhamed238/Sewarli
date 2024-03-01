import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../constants/colors';
import StyledText from './StyledText';

const StickyButton = ({text, onPress}: {text: string; onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <StyledText
        text={text}
        color={colors.secondary}
        fontWeight="semibold"
        fontSize={14}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: colors.secondaryVarient,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: '#0000004D',
    elevation: 2,
  },
});

export default StickyButton;
