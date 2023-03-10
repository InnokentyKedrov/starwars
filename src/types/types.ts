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

export type ApiResponse = {
  results: ResultsType[];
  count: number;
};

export type InitialStateType = {
  count: number;
  results: ResultsType[];
  currentCard: ResultsType;
  language: string;
  status: string;
  isModal: boolean;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
