import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import FA from 'react-native-vector-icons/FontAwesome5';

const ProfileAvatar = () => {
  return (
    <View style={styles.container}>
      <FA name="user-alt" size={18} color={colors.secondary} />
    </View>
  );
};

export default ProfileAvatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryVarient,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
  },
});
