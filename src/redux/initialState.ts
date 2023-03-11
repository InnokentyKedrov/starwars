import { InitialStateType } from '../types/types';

const initialState: InitialStateType = {
  results: [],
  sortResults: [],
  currentCard: {
    birth_year: '',
    eye_color: '',
    gender: '',
    hair_color: '',
    height: '',
    mass: '',
    name: '',
    skin_color: '',
  },
  language: localStorage.getItem('language') || '',
  isModal: false,
  currentPage: 1,
  status: '',
};

export default initialState;
