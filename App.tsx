import React from 'react';
import {I18nManager, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './stacks/MainStack';
import AuthStack from './stacks/AuthStack';
import i18n from './lib/locales/i18n';
import i18next from 'i18next';
import {storage} from './lib/storage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {true ? (
            <Stack.Screen
              name="MainStack"
              component={MainStack}
              options={{
                animation: 'slide_from_right',
              }}
            />
          ) : (
            <Stack.Screen
              name="AuthStack"
              component={AuthStack}
              options={{
                animation: 'slide_from_right',
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default function App() {
  const lang = storage.getString('language');
  i18n.init(lang).finally(() => {
    const {language} = i18next;
    if (language === 'ar' && !I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
