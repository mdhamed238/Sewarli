import {Image, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import colors from '../constants/colors';
import StyledText from './StyledText';
import UserAvatar from './UserAvatar';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import PinIcon from '../assets/svg/pin.svg';

const avatars = [
  require('../assets/avatars/avatar1.png'),
  require('../assets/avatars/avatar2.png'),
  require('../assets/avatars/avatar3.png'),
];

const ExpertCard = ({
  image,
  title,
  subtitle,
  rating = 0,
  city,
  hasAvatar = false,
  hasDivider = false,
  hasMapPin = false,
}: {
  image: any;
  title: string;
  subtitle: string;
  rating: number;
  city?: string;
  hasAvatar?: boolean;
  hasDivider?: boolean;
  hasMapPin?: boolean;
}) => {
  const number = useMemo(() => Math.floor(Math.random() * 3), []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{image}</View>
      <View style={styles.bottomContainer}>
        <View style={styles.content1}>
          {hasAvatar && (
            <UserAvatar
              image={
                <Image
                  source={avatars[number]}
                  style={{width: 32, height: 32}}
                />
              }
            />
          )}
          <View style={styles.description}>
            <StyledText text={title} />
            {hasDivider && !hasAvatar && <View style={[styles.divider, {}]} />}
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              {hasMapPin && !hasAvatar && (
                <FAIcon name="map-marker" color={colors.white} size={16} />
              )}
              <StyledText text={subtitle} fontSize={14} />
            </View>
          </View>
        </View>
        <View style={styles.content2}>
          {hasDivider && !!city && <View style={[styles.divider, {}]} />}
          {city && (
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
              <PinIcon width={15} height={14} />
              <StyledText
                text={city}
                color={colors.white}
                fontSize={14}
                style={{
                  lineHeight: 24,
                  marginTop: 4,
                }}
              />
            </View>
          )}
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

export default ExpertCard;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: 200,
    marginTop: 4,
    marginBottom: 2,
    backgroundColor: colors.grey,
  },
  badge: {
    position: 'absolute',
    top: 20,
    right: 14,
    width: 48,
    height: 24,
    borderRadius: 50,
    backgroundColor: colors.secondaryVarient,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    gap: 4,
  },
  container: {
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 12,
    width: 242,
    minHeight: 235,
    maxHeight: 280,
  },
  bottomContainer: {
    alignItems: 'flex-start',
    backgroundColor: colors.darkGrey,
    padding: 16,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  content1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    width: '100%',
  },
  content2: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  imageContainer: {
    width: '100%',
    height: 151,
  },
});
