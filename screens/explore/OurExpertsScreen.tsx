import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import SectionHeader from '../../components/SectionHeader';
import {Expert, FilterState} from '../../types';

import i18next from 'i18next';
import ExpertCard from '../../components/ExpertCard';
import {experts} from '../../lib/dummydata';
import ScreenWrapper from '../../components/ScreenWrapper';
import StickyButton from '../../components/StickyButton';
import {useTranslation} from 'react-i18next';
import FilterSelect from '../../components/FilterSelect';
import ExpertsFiltersBottomSheet from './_components/ExpertsFiltersBottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

const Experts = ({data, title}: {data: Expert[]; title: string}) => {
  return (
    <>
      <SectionHeader title={title} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {data.map(expert => (
          <ExpertCard
            key={expert.username}
            image={<Image source={expert.image} style={styles.image} />}
            title={expert.username}
            subtitle={i18next.t('n_years_of_experience', {
              years: expert.yearsOfExperience,
            })}
            city={expert.city}
            rating={expert.rating}
            hasAvatar
            hasDivider
            hasMapPin
          />
        ))}
      </ScrollView>
    </>
  );
};

const OurExpertsScreen = () => {
  const {t} = useTranslation();
  const [filters, setFilters] = React.useState<FilterState>({
    all: true,
  });
  const bottomSheetRef = React.useRef<BottomSheetMethods>(null);

  const handleClosePress = useCallback(
    () => bottomSheetRef.current?.close(),
    [],
  );
  const handleOpenPress = useCallback(
    () => bottomSheetRef.current?.expand(),
    [],
  );

  const [videoEditors, photographers, graphicDesigners, videographers] =
    useMemo(() => {
      const videoEditors = experts.filter(
        expert => expert.domain === 'video_editor',
      );
      const photographers = experts.filter(
        expert => expert.domain === 'photographer',
      );

      const graphicDesigners = experts.filter(
        expert => expert.domain === 'graphic_designer',
      );

      const videographers = experts.filter(
        expert => expert.domain === 'videographer',
      );

      return [videoEditors, photographers, graphicDesigners, videographers];
    }, []);

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
            checked={!!filters.domains?.length}
            text={t('domains')}
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Experts title={t('our_monteurs')} data={videoEditors} />
          <Experts title={t('our_photographers')} data={photographers} />
          <Experts title={t('our_gfxdesigners')} data={graphicDesigners} />
          <Experts title={t('our_videographers')} data={videographers} />
          <View style={{height: 64}} />
        </ScrollView>
        <StickyButton text={t('add_event')} onPress={() => {}} />
      </ScreenWrapper>
      <ExpertsFiltersBottomSheet
        bottomSheetRef={bottomSheetRef}
        filters={filters}
        setFilters={setFilters}
        handleClosePress={handleClosePress}
      />
    </>
  );
};

export default OurExpertsScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
