import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import {studios} from '../../lib/dummydata';
import StudioCard from '../../components/StudioCard';
import {FilterState, Studio} from '../../types';
import StickyButton from '../../components/StickyButton';
import {useTranslation} from 'react-i18next';
import FilterSelect from '../../components/FilterSelect';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import ExpertsFiltersBottomSheet from './_components/ExpertsFiltersBottomSheet';
import StudioFiltersBottomSheet from './_components/StudioFiltersBottomSheet';

const OurStudiosScreen = () => {
  const {t} = useTranslation();
  const [filters, setFilters] = React.useState<FilterState>({
    all: true,
  });
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  const handleClosePress = useCallback(
    () => bottomSheetRef.current?.close(),
    [],
  );
  const handleOpenPress = useCallback(
    () => bottomSheetRef.current?.expand(),
    [],
  );
  return (
    <>
      <ScreenWrapper>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 60,
            alignItems: 'flex-start',
            gap: 10,
          }}>
          <FilterSelect
            checked={!!filters.all}
            text={t('all')}
            onPress={handleOpenPress}
          />
          <FilterSelect
            checked={!!filters.equipments?.length}
            text={t('equipments')}
            onPress={handleOpenPress}
          />
          <FilterSelect
            checked={!!filters.cities?.length}
            text={t('cities')}
            onPress={handleOpenPress}
          />
          <FilterSelect
            checked={!!filters.experiences?.length}
            text={t('years_of_experience')}
            onPress={handleOpenPress}
          />
          <FilterSelect
            checked={!!filters.ratings?.length}
            text={t('ratings')}
            onPress={handleOpenPress}
          />
        </ScrollView>
        <FlatList
          data={studios}
          renderItem={({item}) => {
            const {name, city, image, rating} = item as unknown as Studio;
            return (
              <StudioCard
                name={name}
                city={city}
                image={image}
                rating={rating}
                fontSize={14}
                style={styles.gridItem}
                dividerStyle={{}}
              />
            );
          }}
          keyExtractor={item => item.name.toLowerCase()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
        <View style={{height: 60}} />
        <StickyButton text={t('add_event')} onPress={() => {}} />
      </ScreenWrapper>
      <StudioFiltersBottomSheet
        bottomSheetRef={bottomSheetRef}
        filters={filters}
        setFilters={setFilters}
        handleClosePress={handleClosePress}
      />
    </>
  );
};

export default OurStudiosScreen;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    // alignSelf: 'center',
  },
});
