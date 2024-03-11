import {View} from 'react-native';
import React, {useMemo} from 'react';
import ScreenWrapper from '../../../components/ScreenWrapper';
import EventCard from '../_components/EventCard';
import Button from '../../../components/Button';
import {useTranslation} from 'react-i18next';
import {events} from '../../../lib/dummydata';

const ReceivedEventScreen = () => {
  const {t} = useTranslation();
  const receivedEvents = useMemo(() => {
    return events.filter(event => event.status === 'received');
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

export default ReceivedEventScreen;
