export type Lang = 'en' | 'fr' | 'ar';

type City =
  | 'Nouakchott'
  | 'Nouadhibou'
  | 'Kaédi'
  | 'Rosso'
  | 'Atar'
  | 'Zouérat'
  | 'Néma'
  | 'Aleg'
  | 'Akjoujt'
  | 'Kiffa';

export type Expert = {
  username: string;
  nameFr: string;
  nameAr: string;
  domain: 'photographer' | 'videographer' | 'video_editor' | 'graphic_designer';
  yearsOfExperience: number;
  city: City;
  rating: number;
  image: any;
};
