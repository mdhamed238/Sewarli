export type Lang = 'en' | 'fr' | 'ar';

export type Expert = {
  username: string;
  nameFr: string;
  nameAr: string;
  domain: 'photographer' | 'videographer' | 'video_editor' | 'graphic_designer';
  yearsOfExperience: number;
  rating: number;
  image: any;
};
