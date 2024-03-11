import {StyleSheet, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import StyledText from '../../components/StyledText';
import {useTranslation} from 'react-i18next';
import colors from '../../constants/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ReceivedEventScreen from './_screens/ReceivedEventScreen';
import i18next from 'i18next';
import InprogressEventScreen from './_screens/InprogressEventScreen';
import OldEventScreen from './_screens/OldEventScreen';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: 20,
          backgroundColor: colors.darkGrey,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'none',
        },
        tabBarActiveTintColor: colors.primaryVarient,
        tabBarInactiveTintColor: colors.white,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primaryVarient,
        },
        tabBarPressColor: colors.grey,
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="Received"
        component={ReceivedEventScreen}
        options={{
          title: i18next.t('received_quote'),
        }}
      />
      <Tab.Screen
        name="onhold"
        component={InprogressEventScreen}
        options={{
          title: i18next.t('inprogress'),
        }}
      />
      <Tab.Screen
        name="OldEvents"
        component={OldEventScreen}
        options={{
          title: i18next.t('old'),
        }}
      />
    </Tab.Navigator>
  );
};

const EventScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper withHeader noHorizontalPadding>
      <View style={styles.topContainer}>
        <StyledText
          fontWeight="bold"
          text={t('events') + ' 🗓️'}
          color={colors.white}
          fontSize={24}
        />
      </View>
      <Tabs />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 16,
  },
});

export default EventScreen;
