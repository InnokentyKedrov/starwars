import { InitialStateType } from '../types/types';

const initialState: InitialStateType = {
  count: 0,
  results: [],
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
  status: '',
  isModal: false,
};

export default initialState;
