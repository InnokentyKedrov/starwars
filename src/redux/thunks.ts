import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialStateType, ResultsType } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchCharacters = createAsyncThunk<
  ResultsType[],
  InitialStateType,
  { rejectValue: string }
>('state/fetchCharacters', async function () {
  const dataArray: ResultsType[] = [];
  for (let i = 1; i <= 2; i++) {
    const response = await fetch(`${BASE_URL}people/?page=${i}`);

    if (response.ok) {
      const data = (await response.json()).results;
      dataArray.push(...data);
    }
  }

  return dataArray;
});

export const fetchCharactersWookiee = createAsyncThunk<
  ResultsType[],
  InitialStateType,
  { rejectValue: string }
>('state/fetchCharacters', async function () {
  const dataArray: ResultsType[] = [];
  for (let i = 1; i <= 10; i++) {
    const response = await fetch(`${BASE_URL}people/${i}/?format=wookiee`);

    if (response.ok) {
      const data = await response.json();
      dataArray.push(data);
    }
  }

  return dataArray;
});
