import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultsType } from '../types/types';
import initialState from './initialState';
import { fetchCharacters } from './thunks';

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setCurrentCard(state, action: PayloadAction<ResultsType>) {
      state.currentCard = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = Number(action.payload);
    },
    setIsModal(state, action: PayloadAction<boolean>) {
      state.isModal = action.payload;
    },
    setSortResults(state, action: PayloadAction<ResultsType[]>) {
      state.sortResults = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      if (action.payload === 'en') state.language = 'en';
      else state.language = 'wookiee';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.results = action.payload;
        state.sortResults = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'serverError';
      });
  },
});

export const { setCurrentCard, setCurrentPage, setIsModal, setSortResults, setLanguage } =
  stateSlice.actions;

export default stateSlice.reducer;
