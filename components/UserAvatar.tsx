import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import colors from '../constants/colors';

type Props = {
  image?: any;
  imageUrl?: string;
  bgColor?: string;
};

const UserAvatar = ({
  image,
  imageUrl,
  bgColor = colors.primaryVarient,
}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      {image ? image : imageUrl ? <Image source={{uri: imageUrl}} /> : null}
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    width: 38,
    height: 40,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
