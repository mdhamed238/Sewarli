import {View, Text} from 'react-native';
import React, {useMemo} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import Button from '../../../components/Button';
import EventCard from '../_components/EventCard';
import {useTranslation} from 'react-i18next';
import {events} from '../../../lib/dummydata';

const OldEventScreen = () => {
  const {t} = useTranslation();
  const receivedEvents = useMemo(() => {
    return events.filter(event => event.status === 'old');
  }, []);
  return (
    <ScreenWrapper>
      <View
        style={{
          gap: 20,
        }}>
        {receivedEvents.map((event, idx) => {
          return <EventCard key={idx} event={event} />;
        })}
      </View>
      <Button
        style={{marginTop: 30}}
        text={t('add_event')}
        onPress={() => {}}
        fullWidth
      />
    </ScreenWrapper>
  );
};

export default OldEventScreen;
