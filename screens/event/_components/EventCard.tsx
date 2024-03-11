import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../../constants/colors';
import EventIcon from '../../../assets/svg/event.svg';
import StyledText from '../../../components/StyledText';
import {useTranslation} from 'react-i18next';
import {Event} from '../../../types';

type EventCardProps = {
  event: Event;
};
const EventCard = ({
  event: {title, date, quoteCount, status},
}: EventCardProps) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <EventIcon />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          gap: 10,
        }}>
        <StyledText
          text={title}
          color={colors.white}
          fontWeight="bold"
          fontSize={16}
        />
        <StyledText
          text={date}
          fontSize={14}
          fontWeight="normal"
          color={colors.grey}
        />
      </View>
      <View style={styles.badge}>
        <StyledText
          text={t('n_quotes', {count: quoteCount})}
          color={colors.white}
          fontWeight="bold"
          fontSize={14}
        />
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#6750A4',
  },
  container: {
    backgroundColor: colors.darkGrey,
    width: '100%',
    maxWidth: 460,
    height: 100,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
