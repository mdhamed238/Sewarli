import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import CountryFlag from 'react-native-country-flag';
import {AppLanguage} from '../types';

const CountryIcon = ({
  country,
  style = {},
  shape = 'round',
}: {
  country: AppLanguage;
  style?: StyleProp<ViewStyle>;
  shape?: 'round' | 'square';
}) => {
  return (
    <CountryFlag
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        shape === 'square' ? {borderRadius: 4} : {borderRadius: 16},
        style,
      ]}
      isoCode={country === 'en' ? 'us' : country === 'fr' ? 'fr' : 'mr'}
      size={25}
    />
  );
};

export default CountryIcon;

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    resizeMode: 'cover',
  },
});
