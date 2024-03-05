import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import SectionHeader from '../../components/SectionHeader';
import {Expert} from '../../types';

import i18next from 'i18next';
import ExpertCard from '../../components/ExpertCard';
import {experts} from '../../lib/dummydata';
import StyledText from '../../components/StyledText';
import colors from '../../constants/colors';
import ScreenWrapper from '../../components/ScreenWrapper';
import StickyButton from '../../components/StickyButton';
import {useTranslation} from 'react-i18next';

const Experts = ({data, title}: {data: Expert[]; title: string}) => {
  console.log('data', data);
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
            subtitle={i18next.t('years_of_experience', {
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
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Experts title={t('our_monteurs')} data={videoEditors} />
        <Experts title={t('our_photographers')} data={photographers} />
        <Experts title={t('our_gfxdesigners')} data={graphicDesigners} />
        <Experts title={t('our_videographers')} data={videographers} />
        <View style={{height: 60}} />
      </ScrollView>
      <StickyButton text={t('add_event')} onPress={() => {}} />
    </ScreenWrapper>
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
