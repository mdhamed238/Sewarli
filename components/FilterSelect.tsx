import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import StyledText from './StyledText';
import colors from '../constants/colors';
import CheckIcon from '../assets/svg/check.svg';
import DownIcon from '../assets/svg/down.svg';

type Props = {
  text: string;
  checked: boolean;
  onPress: () => void;
  borderColor?: string;
  noArrowDown?: boolean;
};

const FilterSelect = ({
  checked,
  onPress,
  text,
  borderColor = colors.secondaryVarient,
  noArrowDown = false,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: borderColor},
        checked
          ? {backgroundColor: colors.secondaryVarient}
          : {backgroundColor: 'transparent'},
      ]}
      activeOpacity={0.6}
      onPress={onPress}>
      {checked && <CheckIcon width={14} height={14} />}
      <StyledText
        text={text}
        color={checked ? colors.secondary : colors.white}
        fontSize={12}
        fontWeight="semibold"
      />
      {!checked && !noArrowDown && <DownIcon width={14} height={14} />}
    </TouchableOpacity>
  );
};

export default FilterSelect;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
  },
});
