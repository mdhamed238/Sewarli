import {StyleSheet, View} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import {Image} from 'react-native';

const Avatar = ({
  bgColor = colors.primaryVarient,
  image,
}: {
  bgColor?: string;
  image: any;
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
        },
      ]}>
      {image && <Image source={image} style={{width: 64, height: 64}} />}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
