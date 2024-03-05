import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import StyledText from '../components/StyledText';
import colors from '../constants/colors';
import ScreenWrapper from '../components/ScreenWrapper';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import ProfileAvatar from '../components/ProfileAvatar';
import SectionHeader from '../components/SectionHeader';
import ExpertCard from '../components/ExpertCard';
import Avatar from '../components/Avatar';
import StickyButton from '../components/StickyButton';
import {useTranslation} from 'react-i18next';
import CountryIcon from '../components/CountryIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackList} from '../stacks/HomeStack';
import i18next from 'i18next';
import {Expert, Lang, Studio} from '../types';
import i18n from '../lib/locales/i18n';
import {experts, studios} from '../lib/dummydata';
import StudioCard from '../components/StudioCard';

const NearExperts = ({data}: {data: Expert[]}) => {
  return (
    <>
      <SectionHeader title={i18n.t('experts_nearyou')} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {data.map((expert, index) => (
          <ExpertCard
            key={index}
            image={<Image source={expert.image} style={styles.image} />}
            title={expert.username}
            subtitle={i18next.t(expert.domain)}
            rating={expert.rating}
            hasAvatar
          />
        ))}
      </ScrollView>
    </>
  );
};

const MostRecommendedExperts = ({data}: {data: Expert[]}) => {
  return (
    <>
      <SectionHeader title={i18n.t('most_recommended')} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {data.map((expert, index) => (
          <ExpertCard
            key={index}
            image={<Image source={expert.image} style={styles.image} />}
            title={expert.username}
            subtitle={i18next.t(expert.domain)}
            rating={expert.rating}
            hasAvatar
          />
        ))}
      </ScrollView>
    </>
  );
};

const OurStudios = ({data}: {data: Studio[]}) => {
  return (
    <>
      <SectionHeader title={i18n.t('our_studios')} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {data.map((studio, index) => (
          <StudioCard
            key={index}
            image={studio.image}
            name={studio.name}
            city={studio.city}
            rating={studio.rating}
          />
        ))}
      </ScrollView>
    </>
  );
};

const TopExperts = () => {
  return (
    <View style={{marginTop: 40}}>
      <StyledText
        text={i18n.t('top_experts_thismonth')}
        fontWeight="semibold"
        fontSize={16}
      />
      <View style={styles.topExpertsAvatars}>
        <Avatar image={require('../assets/avatars/avatar1.png')} />
        <Avatar image={require('../assets/avatars/avatar4.png')} />
        <Avatar image={require('../assets/avatars/avatar3.png')} />
      </View>
    </View>
  );
};

const GalleriePhoto = ({photos}: {photos: any[]}) => {
  return (
    <View style={{marginTop: 40}}>
      <StyledText
        text={i18n.t('galerie_photo')}
        fontWeight="medium"
        fontSize={16}
      />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        {photos.map((photo, index) => (
          <Image key={index} style={styles.galleriePhoto} source={photo} />
        ))}
      </ScrollView>
    </View>
  );
};

const Banner = () => {
  return (
    <View style={styles.banner}>
      {/* Start: Icons */}
      <Image
        source={require('../assets/icons/microphone.png')}
        style={[
          styles.topEndMicro,
          i18next.language === 'ar' ? {right: 12} : {right: 12},
        ]}
      />
      <Image
        source={require('../assets/icons/microphone.png')}
        style={[
          styles.centeredMicro,
          i18next.language === 'ar'
            ? {
                left: 70,
                transform: [{rotate: '-45deg'}],
              }
            : {
                left: 78,
              },
        ]}
      />
      <Image
        source={require('../assets/icons/video-camera.png')}
        style={[
          styles.videoCamera,
          i18next.language === 'ar'
            ? {left: 24, transform: [{rotateY: '180deg'}]}
            : {left: 32},
        ]}
      />
      <Image
        source={require('../assets/icons/headphone.png')}
        style={[
          styles.headphone,
          i18next.language === 'ar' ? {left: 20} : {left: 28},
        ]}
      />
      {/* End: Icons */}

      <View
        style={[
          {top: 16},
          i18next.language === 'ar' ? {left: 132, gap: 2} : {left: 132},
        ]}>
        <StyledText
          text={i18next.t('we_also_rent')}
          fontWeight={'normal'}
          style={{
            letterSpacing: 0.5,
            lineHeight: 24,
          }}
        />
        <StyledText
          text={i18next.t('des_studios')}
          fontWeight={'bold'}
          style={{
            fontSize: 17.5,
            letterSpacing: 0.5,
            lineHeight: 24,
          }}
        />
        <StyledText
          text={i18next.t('for_recording')}
          fontWeight={'bold'}
          color={colors.primaryVarient}
          style={{
            fontSize: 17.5,
            letterSpacing: 0.5,
            lineHeight: 24,
          }}
        />
      </View>
      {/* <LinearGradient
      colors={['#FFC83A', '#6100FF', '#1A1A1A']}
      style={styles.linearGradient}
      start={{x: 0, y: 0}}
      end={{x: 0.5, y: -0.5}}
      angle={80.88} // Adjusts the gradient angle
    /> */}
    </View>
  );
};

const HomeScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<HomeScreenProp>();
  const [expertsNearYou, mostRecommendedExperts] = useMemo(() => {
    const rand = Math.floor(Math.random() * 9);
    const expertsNY = experts.slice(rand, rand + 3);
    const mostRecommended = experts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);

    return [expertsNY, mostRecommended];
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.fixedTopRightContainer}>
          <FAIcon name="bell" size={24} color={colors.white} />
          <ProfileAvatar />
        </View>
        <TouchableOpacity
          style={styles.fixedTopLeftContainer}
          onPress={() => navigation.navigate('Language')}>
          <CountryIcon country={i18next.language as Lang} />
        </TouchableOpacity>
        <StyledText
          fontWeight="bold"
          text={t('hello_user', {name: 'Mohamed'})}
          color={colors.white}
          fontSize={24}
          style={{
            marginTop: 10,
          }}
        />
        <NearExperts data={expertsNearYou} />
        <MostRecommendedExperts data={mostRecommendedExperts} />
        <Banner />
        <OurStudios data={studios} />
        <TopExperts />
        <GalleriePhoto
          photos={[
            require('../assets/images/gallerie1.jpg'),
            require('../assets/images/gallerie2.jpg'),
            require('../assets/images/gallerie3.jpg'),
            require('../assets/images/gallerie4.jpg'),
            require('../assets/images/gallerie5.jpg'),
            require('../assets/images/gallerie6.jpg'),
          ]}
        />
        <View style={{height: 80}} />
      </ScrollView>
      <StickyButton text={t('add_event')} onPress={() => {}} />
    </ScreenWrapper>
  );
};

type HomeScreenProp = NativeStackNavigationProp<HomeStackList, 'Home'>;

export default HomeScreen;

const styles = StyleSheet.create({
  galleriePhoto: {
    width: 285,
    height: 151,
    borderRadius: 12,
  },
  topExpertsAvatars: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  videoCamera: {
    position: 'absolute',
    top: 7,
    width: 56,
    height: 50,
  },
  headphone: {
    position: 'absolute',
    bottom: 22,
    width: 42,
    height: 42,
  },
  centeredMicro: {
    position: 'absolute',
    top: 18,
    width: 49,
    height: 49,
  },
  topEndMicro: {
    position: 'absolute',
    top: 12,
    width: 25,
    height: 25,
  },
  banner: {
    height: 115,
    width: '100%',
    backgroundColor: colors.darkGrey,
    marginTop: 12,
    borderRadius: 20,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    marginTop: 'auto',
  },
  fixedTopRightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
    marginBottom: 8,
  },
  fixedTopLeftContainer: {
    position: 'absolute',
    top: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
