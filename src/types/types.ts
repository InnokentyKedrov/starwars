import store from '../redux/store';

export type ResultsType = {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  name: string;
  skin_color: string;
};

export type InitialStateType = {
  results: ResultsType[];
  sortResults: ResultsType[];
  currentCard: ResultsType;
  language: string;
  isModal: boolean;
  currentPage: number;
  status: string;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
