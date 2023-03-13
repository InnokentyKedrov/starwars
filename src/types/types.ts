import store from '../redux/store';

export type ResultsType = {
  birth_year?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  name?: string;
  skin_color?: string;
  rhahrcaoac_roworarc?: string;
  acraahrc_oaooanoorc?: string;
  rrwowhwaworc?: string;
  corahwh_oaooanoorc?: string;
  acwoahrracao?: string;
  scracc?: string;
  whrascwo?: string;
  worowo_oaooanoorc?: string;
};

export type InitialStateType = {
  results: ResultsType[];
  sortResults: ResultsType[];
  currentCard: ResultsType;
  language: 'wookiee' | 'en';
  isModal: boolean;
  currentPage: number;
  status: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
