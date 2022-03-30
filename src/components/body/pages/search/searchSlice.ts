import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface IResponse {
  info: IInfo;
  results: ICharacter[];
}

const charactersAdapter = createEntityAdapter();
const initialState = charactersAdapter.getInitialState();

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<ICharacter[], void>({
      query: () => "/character",
      transformResponse: (responseData: IResponse) => {
        return responseData.results
      }
    }),
    searchCharacter: builder.query<ICharacter[], string>({
      query: (text: string) => `/character/?name=${text}`,
      transformResponse: (responseData: IResponse) => {
        return responseData.results
      }
    }),
  }),
});

export const { useGetCharactersQuery, useSearchCharacterQuery  } = apiSlice;
