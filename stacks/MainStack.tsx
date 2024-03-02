import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventScreen from '../screens/EventScreen';
import ExploreScreen from '../screens/ExploreScreen';
import AssistanceScreen from '../screens/AssistanceScreen';
import colors from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from './HomeStack';
import {useTranslation} from 'react-i18next';

export type MainStackList = {
  HomeStack: undefined;
  Events: undefined;
  Explore: undefined;
  Assistance: undefined;
};

const Tab = createBottomTabNavigator<MainStackList>();

const MainStack = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: '#292929',
          height: 80,
          paddingRight: 8,
          paddingLeft: 8,
          gap: 8,
        },
        tabBarItemStyle: {
          paddingTop: 12,
          paddingBottom: 16,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'DMSans-SemiBold',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: t('home'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.tabIcon, focused ? styles.activeTabIcon : {}]}>
              <Entypo name="home" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          title: t('events'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.tabIcon, focused ? styles.activeTabIcon : {}]}>
              <FontAwesome5Icon name="compass" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: t('explore'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.tabIcon, focused ? styles.activeTabIcon : {}]}>
              <Entypo name="calendar" color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Assistance"
        component={AssistanceScreen}
        options={{
          title: t('assistance'),
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color, size, focused}) => (
            <View style={[styles.tabIcon, focused ? styles.activeTabIcon : {}]}>
              <FontAwesome5Icon
                name="question-circle"
                color={color}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  tabIcon: {
    height: 32,
    width: 64,
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 8,
  },
  activeTabIcon: {
    backgroundColor: '#675740',
  },
});
