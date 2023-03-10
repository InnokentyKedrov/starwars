import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultsType } from '../types/types';
import initialState from './initialState';
import { fetchCharacters } from './thunks';

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    // setStateForms(state, action: PayloadAction<CardType[]>) {
    //   state.stateForms = action.payload;
    // },
    setCurrentCard(state, action: PayloadAction<ResultsType>) {
      state.currentCard = action.payload;
    },
    // setSearch(state, action: PayloadAction<string>) {
    //   state.search = action.payload;
    // },
    // setSort(state, action: PayloadAction<string>) {
    //   state.sort = action.payload;
    // },
    // setCurrentPage(state, action: PayloadAction<string>) {
    //   state.currentPage = action.payload;
    // },
    // setLimit(state, action: PayloadAction<string>) {
    //   state.limit = action.payload;
    // },
    setIsModal(state, action: PayloadAction<boolean>) {
      console.log('action: ', action);
      state.isModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        console.log('action: ', action);
        state.status = 'resolved';
        state.results = action.payload.results;
        state.count = action.payload.count;
        // state.total = action.payload.total?.toString() as string;
        // state.pages = action.payload.pages?.toString() as string;
        // state.status = Number(state.total) ? 'resolved' : 'notFound';
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = 'serverError';
        // state.pages = '1';
        // state.currentPage = '1';
      });
  },
});

export const {
  //   setStateForms,
  setCurrentCard,
  //   setSearch,
  //   setSort,
  //   setCurrentPage,
  //   setLimit,
  setIsModal,
} = stateSlice.actions;

export default stateSlice.reducer;
