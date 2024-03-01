import {View, StyleSheet} from 'react-native';
import React from 'react';
import StyledText from './StyledText';
import LinkButton from './LinkButton';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/colors';

const SectionHeader = ({title, linkTo}: {title: string; linkTo?: string}) => {
  return (
    <View style={styles.container}>
      <StyledText
        text={title}
        color={colors.white}
        fontWeight="semibold"
        fontSize={16}
      />
      <LinkButton
        text="Voir tout"
        to={linkTo ?? null}
        icon={
          <FontAwesome5Icon
            name="chevron-right"
            size={14}
            color={colors.primaryVarient}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 300,
    marginTop: 40,
  },
});
export default SectionHeader;
