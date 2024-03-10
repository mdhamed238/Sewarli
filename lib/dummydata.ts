import {Expert, SelectOption, Studio} from '../types';

export const studios: Studio[] = [
  {
    name: 'SoundLab Studios',
    city: 'Akjoujt',
    rating: 4.2,
    image: require('../assets/images/studios/sound-lab.jpg'),
  },
  {
    name: 'TuneTown',
    city: 'Kiffa',
    rating: 4.3,
    image: require('../assets/images/studios/tune-town.jpg'),
  },
  {
    name: 'Serenity Studios',
    city: 'Nouakchott',
    rating: 4.8,
    image: require('../assets/images/studios/serenity-studios.jpg'),
  },
  {
    name: 'Tuned Recording',
    city: 'Néma',
    rating: 4.2,
    image: require('../assets/images/studios/tuned-recording.jpg'),
  },
  {
    name: 'Rubby Recording',
    city: 'Nouakchott',
    rating: 4.5,
    image: require('../assets/images/studios/rubby-recording.jpg'),
  },
  {
    name: 'Waves Studios',
    city: 'Nouakchott',
    rating: 4.9,
    image: require('../assets/images/studios/waves-studios.jpg'),
  },
];

export const experts: Expert[] = [
  {
    username: 'desert_lens',
    nameFr: 'Jean Pierre Dupont',
    nameAr: 'جان بيير ديبون',
    domain: 'photographer',
    yearsOfExperience: 10,
    city: 'Atar',
    rating: 4.8,
    image: require('../assets/images/photography/1.jpg'),
  },
  {
    username: 'mauritanian_motion',
    nameFr: 'Aïcha Mint Ahmed',
    nameAr: 'عائشة منت أحمد',
    domain: 'videographer',
    yearsOfExperience: 5,
    city: 'Nouakchott',
    rating: 4.5,
    image: require('../assets/images/videography/1.jpg'),
  },
  {
    username: 'pixels_of_n',
    nameFr: 'Mohamed Ould Sidi',
    nameAr: 'محمد ولد سيدي',
    domain: 'graphic_designer',
    yearsOfExperience: 8,
    city: 'Zouérat',
    rating: 4.7,
    image: require('../assets/images/graphic_design/1.jpg'),
  },
  {
    username: 'sahara_images',
    nameFr: 'Isabelle Dubois',
    nameAr: 'إيزابيل دوبوا',
    domain: 'photographer',
    yearsOfExperience: 15,
    city: 'Aleg',
    rating: 4.9,
    image: require('../assets/images/photography/2.jpg'),
  },
  {
    username: 'visual_storyteller',
    nameFr: 'Omar Traoré',
    nameAr: 'عمر توري',
    domain: 'videographer',
    yearsOfExperience: 7,
    city: 'Nouadhibou',
    rating: 4.2,

    image: require('../assets/images/videography/2.jpg'),
  },
  {
    username: 'designbym',
    nameFr: 'Miriam Mint Mohamed',
    nameAr: 'مريم منت محمد',
    domain: 'graphic_designer',
    yearsOfExperience: 3,
    city: 'Kaédi',
    rating: 4.3,
    image: require('../assets/images/graphic_design/2.jpg'),
  },
  {
    username: 'desert_drone',
    nameFr: 'Pierre Durand',
    nameAr: 'بيير دوران',
    domain: 'videographer',
    yearsOfExperience: 12,
    city: 'Atar',
    rating: 4.6,
    image: require('../assets/images/videography/3.jpg'),
  },
  {
    username: 'akjoujt_arts',
    nameFr: 'Fatima Mint Cheikh',
    nameAr: 'فاطمة منت الشيخ',
    domain: 'graphic_designer',
    yearsOfExperience: 2,
    city: 'Akjoujt',
    rating: 4.4,
    image: require('../assets/images/graphic_design/3.jpg'),
  },
  {
    username: 'nomadic_lens',
    nameFr: 'Ahmed Fall',
    nameAr: 'أحمد فال',
    domain: 'photographer',
    yearsOfExperience: 20,
    city: 'Rosso',
    rating: 5.0,
    image: require('../assets/images/photography/3.jpg'),
  },
  {
    username: 'mauritania_edits',
    nameFr: 'Aminata Mint Baba',
    nameAr: 'أمينة منت بابا',
    domain: 'video_editor',
    yearsOfExperience: 4,
    city: 'Nouakchott',
    rating: 4.1,
    image: require('../assets/images/video_editing/1.jpg'),
  },
  {
    username: 'desert_frames',
    nameFr: 'Louis Lemaire',
    nameAr: 'لويس لومير',
    domain: 'photographer',
    yearsOfExperience: 8,
    city: 'Zouérat',
    rating: 4.7,
    image: require('../assets/images/photography/4.jpg'),
  },
  {
    username: 'nktt_motion',
    nameFr: 'Hawa Mint Abderrahmane',
    nameAr: 'حواء منت عبد الرحمن',
    domain: 'videographer',
    yearsOfExperience: 3,
    city: 'Rosso',
    rating: 4.2,
    image: require('../assets/images/videography/1.jpg'),
  },
  {
    username: 'kiffa_designs',
    nameFr: 'Mohamed Lemine Ould Mohamed',
    nameAr: 'محمد لمين ولد محمد',
    domain: 'graphic_designer',
    yearsOfExperience: 5,
    city: 'Kiffa',
    rating: 4.5,
    image: require('../assets/images/graphic_design/4.jpg'),
  },
  {
    username: 'visual_nomad',
    nameFr: 'Djibril Diallo',
    nameAr: 'جبريل ديالو',
    domain: 'photographer',
    yearsOfExperience: 12,
    city: 'Rosso',
    rating: 4.8,
    image: require('../assets/images/photography/1.jpg'),
  },
  {
    username: 'mauritania_cut',
    nameFr: 'Aïcha Mint Brahim',
    nameAr: 'عائشة منت ابراهيم',
    domain: 'video_editor',
    yearsOfExperience: 6,
    city: 'Nouadhibou',
    rating: 4.6,
    image: require('../assets/images/video_editing/2.jpg'),
  },
  {
    username: 'aleg_arts',
    nameFr: 'Sidi Mohamed Ould Ahmed',
    nameAr: 'سيدي محمد ولد أحمد',
    domain: 'graphic_designer',
    yearsOfExperience: 10,
    city: 'Aleg',
    rating: 4.9,
    image: require('../assets/images/graphic_design/1.jpg'),
  },
  {
    username: 'desert_stories',
    nameFr: 'Marie Durand',
    nameAr: 'ماري دوران',
    domain: 'videographer',
    yearsOfExperience: 18,
    city: 'Atar',
    rating: 5.0,
    image: require('../assets/images/videography/2.jpg'),
  },
  {
    username: 'nktt_designs',
    nameFr: 'Yacoub Ould Mohamed',
    nameAr: 'يعقوب ولد محمد',
    domain: 'graphic_designer',
    yearsOfExperience: 7,
    city: 'Nouakchott',
    rating: 4.3,
    image: require('../assets/images/graphic_design/2.jpg'),
  },
  {
    username: 'visual_explorer',
    nameFr: 'Mamadou Diallo',
    nameAr: 'مامادو ديالو',
    domain: 'photographer',
    yearsOfExperience: 15,
    city: 'Nouadhibou',
    rating: 4.7,
    image: require('../assets/images/photography/2.jpg'),
  },
  {
    username: 'mauritania_edits2',
    nameFr: 'Fatima Mint Mohamed',
    nameAr: 'فاطمة منت محمد',
    domain: 'video_editor',
    yearsOfExperience: 2,
    city: 'Nouakchott',
    rating: 4.0,
    image: require('../assets/images/video_editing/3.jpg'),
  },
];

export const domainsOptions: SelectOption[] = [
  {
    label: 'photography',
    value: 'photography',
  },
  {
    label: 'videography',
    value: 'videography',
  },
  {
    label: 'video_editing',
    value: 'video_editing',
  },
  {
    label: 'graphic_design',
    value: 'graphic_design',
  },
];

export const equipmentOptions: SelectOption[] = [
  {
    label: 'camera',
    value: 'camera',
  },
  {
    label: 'lens',
    value: 'lens',
  },
  {
    label: 'lighting',
    value: 'lighting',
  },
  {
    label: 'audio',
    value: 'audio',
  },
  {
    label: 'tripod',
    value: 'tripod',
  },
  {
    label: 'drone',
    value: 'drone',
  },
  {
    label: 'gimbal',
    value: 'gimbal',
  },
  {
    label: 'stabilizer',
    value: 'stabilizer',
  },
  {
    label: 'green_screen',
    value: 'green_screen',
  },
  {
    label: 'backdrops',
    value: 'backdrops',
  },
  {
    label: 'costumes',
    value: 'costumes',
  },
];

export const citiesOptions: SelectOption[] = [
  {
    label: 'nouakchott',
    value: 'nouakchott',
  },
  {
    label: 'nouadhibou',
    value: 'nouadhibou',
  },
  {
    label: 'kaédi',
    value: 'kaédi',
  },
  {
    label: 'rosso',
    value: 'rosso',
  },
  {
    label: 'atar',
    value: 'atar',
  },
  {
    label: 'zouérat',
    value: 'zouérat',
  },
  {
    label: 'néma',
    value: 'néma',
  },
  {
    label: 'aleg',
    value: 'aleg',
  },
  {
    label: 'akjoujt',
    value: 'akjoujt',
  },
  {
    label: 'kiffa',
    value: 'kiffa',
  },
];

export const yearsOfExperienceOptions: SelectOption[] = [
  {
    label: 'more_than_five_years',
    value: 'more_than_five_years',
  },
  {
    label: 'more_than_ten_years',
    value: 'more_than_ten_years',
  },
  {
    label: 'less_than_five_years',
    value: 'less_than_five_years',
  },
];

export const ratingOptions: SelectOption[] = [
  {
    label: 'from_3_of_5',
    value: 'from_3_of_5',
  },
  {
    label: 'from_4.7_of_5',
    value: 'from_4.7_of_5',
  },
];
