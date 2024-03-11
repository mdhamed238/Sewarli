import {View, StyleSheet} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import StyledText from '../../../components/StyledText';
import {useTranslation} from 'react-i18next';
import colors from '../../../constants/colors';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {FilterState} from '../../../types';
import {
  citiesOptions,
  equipmentOptions,
  ratingOptions,
  yearsOfExperienceOptions,
} from '../../../lib/dummydata';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../../../components/Button';
import FilterSection from './FilterSection';

const StudioFiltersBottomSheet = ({
  bottomSheetRef,
  filters,
  setFilters,
  handleClosePress,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  handleClosePress: () => void;
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

  const newEquipmentOptions = useMemo(() => {
    return equipmentOptions.map(option => {
      return {
        ...option,
        isChecked: Boolean(filters.equipments?.includes(option.value)),
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

  const handleSelect = (propery: keyof FilterState, value: string) => {
    let property = filters[propery] as string[];
    if (property?.includes(value)) {
      property = property.filter(el => el !== value);
      setFilters(prev => ({
        ...prev,
        all: property.length === 0,
        [propery]: property,
      }));
    } else {
      property = [...(property || []), value];
      setFilters(prev => ({
        ...prev,
        all: false,
        [propery]: property,
      }));
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{backgroundColor: colors.lightGrey2}}
      backgroundStyle={{backgroundColor: colors.darkGrey}}>
      <ScrollView>
        <View style={styles.screen}>
          <StyledText
            text={t('filter_by')}
            fontWeight="bold"
            fontSize={14}
            style={{textAlign: 'left'}}
            color={colors.white}
          />
          <FilterSection
            title={t('equipments')}
            options={newEquipmentOptions}
            handleSelect={(value: string) => handleSelect('equipments', value)}
          />
          <FilterSection
            title={t('cities')}
            options={newCitiesOptions}
            handleSelect={(value: string) => handleSelect('cities', value)}
          />
          <FilterSection
            title={t('years_of_experience')}
            options={newExperienceOptions}
            handleSelect={(value: string) => handleSelect('experiences', value)}
          />
          <FilterSection
            title={t('ratings')}
            options={newRatingOptions}
            handleSelect={(value: string) => handleSelect('ratings', value)}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button
              text={t('reset')}
              onPress={() => setFilters({all: true})}
              variant="outline"
              style={{
                flex: 1,
              }}
            />
            <Button
              text={t('confirm')}
              onPress={handleClosePress}
              style={{
                flex: 1,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

export default StudioFiltersBottomSheet;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
