import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EventScreen from '../screens/EventScreen';
import ExploreScreen from '../screens/ExploreScreen';
import AssistanceScreen from '../screens/AssistanceScreen';
import colors from '../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const MainStack = () => {
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
        name="Home"
        component={HomeScreen}
        options={{
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
