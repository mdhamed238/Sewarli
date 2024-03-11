import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import colors from '../constants/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import ProfileAvatar from './ProfileAvatar';
import LangBottomSheet from './LangBottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import i18next from 'i18next';
import CountryIcon from './CountryIcon';
import {AppLanguage} from '../types';

const ScreenWrapper = ({
  children,
  noHorizontalPadding = false,
  withHeader = false,
}: {
  children: React.ReactNode;
  noHorizontalPadding?: boolean;
  withHeader?: boolean;
}) => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

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
      <View
        style={[
          styles.container,
          !noHorizontalPadding ? styles.horizontalPadding : {},
        ]}>
        {withHeader && (
          <View
            style={[
              styles.header,
              noHorizontalPadding ? styles.horizontalPadding : {},
            ]}>
            <TouchableOpacity
              style={styles.fixedTopLeftContainer}
              onPress={handleOpenPress}>
              <CountryIcon country={i18next.language as AppLanguage} />
            </TouchableOpacity>
            <View style={styles.fixedTopRightContainer}>
              <FAIcon name="bell" size={24} color={colors.white} />
              <ProfileAvatar />
            </View>
          </View>
        )}
        {children}
      </View>
      <LangBottomSheet
        bottomSheetRef={bottomSheetRef}
        handleClosePress={handleClosePress}
        handleOpenPress={handleOpenPress}
      />
    </>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  horizontalPadding: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 12,
  },
  fixedTopRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  fixedTopLeftContainer: {},
});
