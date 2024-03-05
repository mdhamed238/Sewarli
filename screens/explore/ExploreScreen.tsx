import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ScreenWrapper from '../../components/ScreenWrapper';
import StyledText from '../../components/StyledText';
import {useTranslation} from 'react-i18next';
import colors from '../../constants/colors';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import ProfileAvatar from '../../components/ProfileAvatar';
import OurExpertsScreen from './OurExpertsScreen';
import OurStudiosScreen from './OurStudiosScreen';
import i18next from 'i18next';

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
        name="OurExperts"
        component={OurExpertsScreen}
        options={{
          title: i18next.t('our_experts'),
        }}
      />
      <Tab.Screen
        name="OurStudios"
        component={OurStudiosScreen}
        options={{
          title: i18next.t('our_studios'),
        }}
      />
    </Tab.Navigator>
  );
};

const ExploreScreen = () => {
  const {t} = useTranslation();
  return (
    <ScreenWrapper noHorizontalPadding>
      <View style={styles.topContainer}>
        <View style={styles.fixedTopRightContainer}>
          <FontAwesome6Icon name="bell" size={24} color={colors.white} />
          <ProfileAvatar />
        </View>
        <StyledText
          fontWeight="bold"
          text={t('explore') + '🪄'}
          color={colors.white}
          fontSize={24}
        />
      </View>
      <Tabs />
    </ScreenWrapper>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  topContainer: {
    paddingHorizontal: 16,
  },
  fixedTopRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
    marginBottom: 8,
  },
});
