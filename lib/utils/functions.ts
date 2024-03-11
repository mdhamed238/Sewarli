import {Dimensions} from 'react-native';
import {AppLanguage} from '../../types';

export const wp = (percentage: number) => {
  const value = (percentage * Dimensions.get('window').width) / 100;
  return Math.round(value);
};

export const hp = (percentage: number) => {
  const value = (percentage * Dimensions.get('window').height) / 100;
  return Math.round(value);
};

export function getWeekday(index: number, lang: AppLanguage) {
  const weekdays = {
    en: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    fr: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    ar: [
      'الأحد',
      'الاثنين',
      'الثلاثاء',
      'الأربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
  };

  // Check if the provided index is within the range of 0-6 and if the language code is valid
  if (index < 0 || index > 6) {
    return;
  }
  if (!weekdays[lang]) {
    return;
  }

  return weekdays[lang][index];
}

export function getMonth(index: number, lang: 'en' | 'fr' | 'ar') {
  const months = {
    en: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    fr: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    ar: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
  };

  // Check if the provided index is within the range of 0-11
  if (index < 0 || index > 11) {
    return;
  }
  // Check if the language code is supported
  if (!months[lang]) {
    return;
  }

  return months[lang][index];
}
