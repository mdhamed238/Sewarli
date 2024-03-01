import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import StyledText from '../components/StyledText';
import colors from '../constants/colors';
import ScreenWrapper from '../components/ScreenWrapper';
import FAIcon from 'react-native-vector-icons/FontAwesome6';
import ProfileAvatar from '../components/ProfileAvatar';
import SectionHeader from '../components/SectionHeader';
import FreelancerCard from '../components/FreelancerCard';
import Avatar from '../components/Avatar';
import StickyButton from '../components/StickyButton';

const NearExperts = () => {
  return (
    <>
      <SectionHeader title="Experts près de vous" />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/developer.jpg')}
              style={styles.image}
            />
          }
          title="Mohamed"
          subtitle="Software Developer"
          rating={4.1}
          hasAvatar
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/interview.png')}
              style={styles.image}
            />
          }
          title="Sidi"
          subtitle="Photographe"
          rating={4.2}
          hasAvatar
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/designer.jpg')}
              style={styles.image}
            />
          }
          title="Brahim"
          subtitle="Designer graphique"
          rating={4.0}
          hasAvatar
        />
      </ScrollView>
    </>
  );
};

const MostRecommendedExperts = () => {
  return (
    <>
      <SectionHeader title="Les plus recommandés" />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/photographer2.jpg')}
              style={styles.image}
            />
          }
          title="Chevi3"
          subtitle="Photographe"
          rating={4.8}
          hasAvatar
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/photographer.jpg')}
              style={styles.image}
            />
          }
          rating={4.8}
          title="Omar"
          subtitle="Photographe"
          hasAvatar
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/videographer.jpg')}
              style={styles.image}
            />
          }
          rating={4.7}
          title="Amir"
          subtitle="Videographer"
          hasAvatar
        />
      </ScrollView>
    </>
  );
};

const OurStudios = () => {
  return (
    <>
      <SectionHeader title="Nos studios" />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/sound-lab.jpg')}
              style={styles.image}
            />
          }
          title="SoundLab Studios"
          subtitle="Akjoujt"
          rating={4.2}
          hasDivider
          hasMapPin
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/tune-town.jpg')}
              style={styles.image}
            />
          }
          rating={4.3}
          title="TuneTown"
          subtitle="Kiffa"
          hasDivider
          hasMapPin
        />
        <FreelancerCard
          image={
            <Image
              source={require('../assets/images/serenity-studios.jpg')}
              style={styles.image}
            />
          }
          rating={4.8}
          title="Serenity Studios"
          subtitle="Nouakchott"
          hasDivider
          hasMapPin
        />
      </ScrollView>
    </>
  );
};
const TopExperts = () => {
  return (
    <View style={{marginTop: 40}}>
      <StyledText
        text="Top Experts de ce mois"
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
const GalleriePhoto = () => {
  return (
    <View style={{marginTop: 40}}>
      <StyledText text="Gallerie photo" fontWeight="semibold" fontSize={16} />
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 10,
          marginTop: 16,
        }}
        showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie1.jpg')}
        />
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie2.jpg')}
        />
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie3.jpg')}
        />
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie4.jpg')}
        />
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie5.jpg')}
        />
        <Image
          style={styles.galleriePhoto}
          source={require('../assets/images/gallerie6.jpg')}
        />
      </ScrollView>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.fixedTopRightContainer}>
          <FAIcon name="bell" size={24} color={colors.white} />
          <ProfileAvatar />
        </View>
        <StyledText
          fontWeight="bold"
          text="Salut Mohamed! 👋"
          color={colors.white}
          fontSize={24}
        />
        <NearExperts />
        <MostRecommendedExperts />
        <View style={styles.banner}>
          <Image
            source={require('../assets/icons/microphone.png')}
            style={styles.topEndMicro}
          />
          <Image
            source={require('../assets/icons/microphone.png')}
            style={styles.centeredMicro}
          />
          <Image
            source={require('../assets/icons/video-camera.png')}
            style={styles.videoCamera}
          />
          <Image
            source={require('../assets/icons/headphone.png')}
            style={styles.headphone}
          />

          <View style={{top: 16, left: 132}}>
            <StyledText
              text="Nous louons aussi"
              fontWeight={'medium'}
              style={{
                letterSpacing: 0.5,
                lineHeight: 24,
              }}
            />
            <StyledText
              text="des studios"
              fontWeight={'bold'}
              style={{
                fontSize: 17.5,
                letterSpacing: 0.5,
                lineHeight: 24,
              }}
            />
            <StyledText
              text="d'enregistrement"
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
        <OurStudios />
        <TopExperts />
        <GalleriePhoto />
        <View style={{height: 80}} />
      </ScrollView>
      <StickyButton text="Ajouter événement" onPress={() => {}} />
    </ScreenWrapper>
  );
};

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
    left: 32,
    width: 56,
    height: 50,
  },
  headphone: {
    position: 'absolute',
    bottom: 22,
    left: 28,
    width: 42,
    height: 42,
  },
  centeredMicro: {
    position: 'absolute',
    top: 18,
    left: 78,
    width: 49,
    height: 49,
  },
  topEndMicro: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 25,
    height: 25,
  },
  banner: {
    height: 115,
    width: 328,
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
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
});
