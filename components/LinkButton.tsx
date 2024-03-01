import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import StyledText from './StyledText';
import {useNavigation} from '@react-navigation/native';

type Props = {
  text: string;
  icon?: React.ReactNode;
  to?: string | null;
};

const LinkButton = ({text, icon, to}: Props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (to) {
      navigation.navigate(to); // Navigate to the specified screen
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <StyledText
        text={text}
        color={colors.primaryVarient}
        fontSize={14}
        fontWeight="bold"
      />
      {icon && icon}
    </Pressable>
  );
};

export default LinkButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  text: {
    color: colors.primaryVarient,
    fontSize: 16,
  },
});
