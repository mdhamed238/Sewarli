import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import {studios} from '../../lib/dummydata';
import StudioCard from '../../components/StudioCard';
import {Studio} from '../../types';
import StickyButton from '../../components/StickyButton';
import {useTranslation} from 'react-i18next';

const OurStudiosScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper>
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
