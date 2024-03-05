import {View, Image, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import StyledText from './StyledText';
import PinIcon from '../assets/svg/pin.svg';

const StudioCard = ({
  image,
  name,
  city,
  rating = 0,
  style = {},

  fontSize = 16,
}: {
  image: any;
  name: string;
  city: string;
  rating: number;
  style?: StyleProp<ViewStyle>;
  dividerStyle?: StyleProp<ViewStyle>;
  fontSize?: number;
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.description}>
          <StyledText text={name} fontSize={fontSize} />
          <View style={[styles.divider]} />
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            <PinIcon width={15} height={14} />
            <StyledText text={city} fontSize={fontSize} />
          </View>
        </View>
      </View>

      <View style={styles.badge}>
        <StyledText
          text={`${rating.toFixed(1)} / 5`}
          color={colors.secondary}
          fontWeight="semibold"
          fontSize={12}
        />
      </View>
    </View>
  );
};

export default StudioCard;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '100%',
    marginTop: 4,
    marginBottom: 2,
    backgroundColor: colors.grey,
  },
  badge: {
    position: 'absolute',
    top: 18,
    right: 12,
    width: 48,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.secondaryVarient,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    gap: 4,
    flex: 1,
  },
  container: {
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12,
    width: 242,
    minHeight: 235,
    maxHeight: 270,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
    backgroundColor: colors.darkGrey,
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  imageContainer: {
    width: '100%',
    height: 151,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
