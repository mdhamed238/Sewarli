import {Image, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import colors from '../constants/colors';
import StyledText from './StyledText';
import UserAvatar from './UserAvatar';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const avatars = [
  require('../assets/avatars/avatar1.png'),
  require('../assets/avatars/avatar2.png'),
  require('../assets/avatars/avatar3.png'),
];

const FreelancerCard = ({
  image,
  title,
  subtitle,
  rating = 0,
  hasAvatar = false,
  hasDivider = false,
  hasMapPin = false,
}: {
  image: any;
  title: string;
  subtitle: string;
  rating: number;
  hasAvatar?: boolean;
  hasDivider?: boolean;
  hasMapPin?: boolean;
}) => {
  const number = useMemo(() => Math.floor(Math.random() * 3), []);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{image}</View>
      <View style={styles.content}>
        {hasAvatar && (
          <UserAvatar
            image={
              <Image source={avatars[number]} style={{width: 32, height: 32}} />
            }
          />
        )}
        <View style={styles.description}>
          <StyledText text={title} />
          {hasDivider && <View style={styles.divider} />}
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
            {hasMapPin && (
              <FAIcon name="map-marker" color={colors.white} size={16} />
            )}
            <StyledText text={subtitle} />
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

export default FreelancerCard;

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
    height: 235,
  },
  content: {
    backgroundColor: colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    flex: 1,
    padding: 16,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  imageContainer: {
    width: '100%',
    height: 151,
  },
});
