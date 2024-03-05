import {View, StyleSheet} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import StyledText from './StyledText';
import {useTranslation} from 'react-i18next';
import colors from '../constants/colors';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import FilterSelect from './FilterSelect';
import {FilterState, CheckedSelectOption} from '../types';
import i18next from 'i18next';
import {
  citiesOptions,
  domainsOptions,
  ratingOptions,
  yearsOfExperienceOptions,
} from '../lib/dummydata';
import {ScrollView} from 'react-native-gesture-handler';

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
        fontWeight="medium"
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

const FiltersBottomSheet = ({
  bottomSheetRef,
  filters,
  setFilters,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}) => {
  const {t} = useTranslation();
  const snapPoints = useMemo(() => ['90%'], []); //Exact height: 83.375

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const newDomainOptions = useMemo(() => {
    return domainsOptions.map(option => {
      return {
        ...option,
        isChecked: Boolean(filters.domains?.includes(option.value)),
      };
    });
  }, [filters]);

  const newCitiesOptions = useMemo(() => {
    return citiesOptions.map(option => {
      return {
        ...option,
        isChecked: Boolean(filters.cities?.includes(option.value)),
      };
    });
  }, [filters]);

  const newExperienceOptions = useMemo(() => {
    return yearsOfExperienceOptions.map(option => {
      return {
        ...option,
        isChecked: Boolean(filters.experiences?.includes(option.value)),
      };
    });
  }, [filters]);

  const newRatingOptions = useMemo(() => {
    return ratingOptions.map(option => {
      return {
        ...option,
        isChecked: Boolean(filters.ratings?.includes(option.value)),
      };
    });
  }, [filters]);

  const handleSelectDomain = (value: string) => {
    const domains = filters.domains;
    if (domains?.includes(value)) {
      setFilters(prev => ({
        ...prev,
        domains: domains.filter(domain => domain !== value),
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        domains: [...(prev.domains || []), value],
      }));
    }
  };

  const handleSelectCity = (value: string) => {
    const cities = filters.cities;
    if (cities?.includes(value)) {
      setFilters(prev => ({
        ...prev,
        cities: cities.filter(domain => domain !== value),
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        cities: [...(prev.cities || []), value],
      }));
    }
  };

  const handleSelectExperience = (value: string) => {
    const experiences = filters.experiences;
    if (experiences?.includes(value)) {
      setFilters(prev => ({
        ...prev,
        experiences: experiences.filter(domain => domain !== value),
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        experiences: [...(prev.experiences || []), value],
      }));
    }
  };

  const handleSelectRating = (value: string) => {
    const ratings = filters.ratings;
    if (ratings?.includes(value)) {
      setFilters(prev => ({
        ...prev,
        ratings: ratings.filter(domain => domain !== value),
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        ratings: [...(prev.ratings || []), value],
      }));
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}>
      <ScrollView>
        <View style={styles.screen}>
          <StyledText
            text={t('filter_by')}
            fontWeight="bold"
            fontSize={14}
            style={{textAlign: 'left'}}
            color={colors.darkGrey}
          />
          <FilterSection
            title={t('domains')}
            options={newDomainOptions}
            handleSelect={handleSelectDomain}
          />
          <FilterSection
            title={t('cities')}
            options={newCitiesOptions}
            handleSelect={handleSelectCity}
          />
          <FilterSection
            title={t('years_of_experience')}
            options={newExperienceOptions}
            handleSelect={handleSelectExperience}
          />
          <FilterSection
            title={t('ratings')}
            options={newRatingOptions}
            handleSelect={handleSelectRating}
          />
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

export default FiltersBottomSheet;

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
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.darkGrey,
  },
});
