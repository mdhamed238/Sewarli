import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import StyledText from '../components/StyledText';
import colors from '../constants/colors';
import CountryIcon from '../components/CountryIcon';
import {Lang} from '../types';
import i18n from '../lib/locales/i18n';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const langs = [
  {
    value: 'en',
    label: 'english',
  },
  {
    value: 'fr',
    label: 'french',
  },
  {
    value: 'ar',
    label: 'arabic',
  },
];
const LanguageScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const handleChooseLang = useCallback(
    (lang: Lang) => {
      i18n.setLanguage(lang, lang === 'ar');
    },
    [navigation],
  );

  return (
    <View style={styles.screen}>
      <StyledText
        text={t('choose_language')}
        fontWeight="bold"
        fontSize={16}
        style={{textAlign: 'center'}}
        color={colors.darkGrey}
      />
      <View style={styles.container}>
        {langs.map(lang => (
          <TouchableOpacity
            key={lang.label}
            style={styles.item}
            onPress={() => handleChooseLang(lang.value as Lang)}>
            <CountryIcon country={lang.value as Lang} />
            <StyledText
              text={t(lang.label)}
              color={colors.darkGrey}
              fontWeight="semibold"
              fontSize={16}
            />
            <StyledText
              text={'(' + t(`native_${lang.value}`) + ')'}
              color={colors.grey}
              fontWeight="medium"
              fontSize={14}
              style={{flex: 1, textAlign: 'right'}}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  container: {
    marginTop: 20,
    gap: 10,
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
});
