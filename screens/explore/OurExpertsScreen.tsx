import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import SectionHeader from '../../components/SectionHeader';
import {Expert} from '../../types';

import i18next from 'i18next';
import ExpertCard from '../../components/ExpertCard';
import {experts} from '../../lib/dummydata';

const Experts = ({data}: {data: Expert[]}) => {
  return (
    <>
      <SectionHeader title={i18next.t('experts_nearyou')} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {data.map((expert, index) => (
          <ExpertCard
            key={index}
            image={<Image source={expert.image} style={styles.image} />}
            title={i18next.language === 'ar' ? expert.nameAr : expert.nameFr}
            subtitle={i18next.t('years_of_experience', {
              years: expert.yearsOfExperience,
            })}
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
  const [videoEditors] = useMemo(() => {
    const videoEditors = experts.filter(
      expert => expert.domain === 'video_editor',
    );

    return [videoEditors];
  }, []);
  return (
    <View
      style={{
        paddingTop: 8,
      }}>
      <SectionHeader title={'our_monteurs'} />
      <Experts data={videoEditors} />
    </View>
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
