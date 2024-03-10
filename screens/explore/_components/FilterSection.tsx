import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CheckedSelectOption} from '../../../types';
import StyledText from '../../../components/StyledText';
import FilterSelect from '../../../components/FilterSelect';
import colors from '../../../constants/colors';
import i18next from 'i18next';

const FilterSection = ({
  title,
  options,
  handleSelect,
}: {
  title: string;
  options: Array<CheckedSelectOption>;
  handleSelect: (value: string) => void;
}) => {
  return (
    <View style={styles.filterSectionContainer}>
      <StyledText
        text={title}
        fontWeight="semibold"
        fontSize={12}
        style={{textAlign: 'left'}}
        color={colors.lightGrey}
      />
      <View style={styles.filterSectionItems}>
        {options.map((option, index) => (
          <FilterSelect
            key={index}
            text={i18next.t(option.label)}
            checked={option.isChecked}
            onPress={() => handleSelect(option.value)}
            borderColor={colors.white}
            noArrowDown
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterSectionItems: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  filterSectionContainer: {
    marginVertical: 15,
    alignItems: 'flex-start',
    gap: 10,
  },
});
export default FilterSection;
