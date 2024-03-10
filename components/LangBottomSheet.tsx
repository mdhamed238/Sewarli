import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import StyledText from './StyledText';
import {useTranslation} from 'react-i18next';

import i18n from '../lib/locales/i18n';
import {AppLanguage} from '../types';
import colors from '../constants/colors';
import CountryIcon from './CountryIcon';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

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

const LangBottomSheet = ({
  bottomSheetRef,

  handleClosePress,
}: {
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  handleOpenPress: () => void;
  handleClosePress: () => void;
}) => {
  const {t} = useTranslation();
  const snapPoints = useMemo(() => ['50%'], []);

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

  const handleChooseLang = useCallback(
    (lang: AppLanguage) => {
      i18n.setLanguage(lang, lang === 'ar');
      handleClosePress();
    },
    [handleClosePress],
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={{backgroundColor: colors.white}}
      style={{paddingHorizontal: 16}}>
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
            onPress={() => handleChooseLang(lang.value as AppLanguage)}>
            <CountryIcon country={lang.value as AppLanguage} />
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
    </BottomSheet>
  );
};

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
export default LangBottomSheet;
