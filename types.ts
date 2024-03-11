export type AppLanguage = 'en' | 'fr' | 'ar';

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

export type Studio = {
  name: string;
  city: string;
  rating: number;
  image: any;
};

export type SelectOption = {
  label: string;
  value: string;
};
export type CheckedSelectOption = SelectOption & {isChecked: boolean};

export type FilterState = {
  all: boolean;
  domains?: string[];
  equipments?: string[];
  cities?: string[];
  experiences?: string[];
  ratings?: string[];
};

export type FilterStateItem = FilterState[keyof FilterState];

export type Event = {
  title: string;
  date: string;
  status: 'received' | 'onhold' | 'old';
  quoteCount: number;
};
