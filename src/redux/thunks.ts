import { createAsyncThunk } from '@reduxjs/toolkit';
import { InitialStateType } from '../types/types';
import { ApiResponse } from '../types/types';

const BASE_URL = 'https://swapi.dev/api/';

export const fetchCharacters = createAsyncThunk<
  ApiResponse,
  InitialStateType,
  { rejectValue: string }
>('state/fetchCharacters', async function (state, { rejectWithValue }) {
  const response = await fetch(`${BASE_URL}people`);

  if (!response.ok) {
    return rejectWithValue('Server error!');
  }

  const data = await response.json();

  console.log('await response.json(): ', data);
  return data;
});
