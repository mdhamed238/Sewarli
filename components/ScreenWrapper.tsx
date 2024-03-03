import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';

const ScreenWrapper = ({
  children,
  noHorizontalPadding = false,
}: {
  children: React.ReactNode;
  noHorizontalPadding?: boolean;
}) => {
  return (
    <View
      style={[
        styles.container,
        !noHorizontalPadding ? {paddingHorizontal: 16} : {},
      ]}>
      {children}
    </View>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 12,
  },
});
