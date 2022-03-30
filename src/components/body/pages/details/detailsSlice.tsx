import { createEntityAdapter } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICharacter, IResponse } from "../search/searchSlice";

const characterAdapter = createEntityAdapter();
const initialState = characterAdapter.getInitialState();

export const detailsSlice = createApi({
  reducerPath: "detailsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacter: builder.query<ICharacter, number>({
      query: (id) => `/character/${id}`,
    }),
    getArrayCharacter: builder.query<ICharacter[], string>({
      query: (ids) => `/character/${ids}`,
    }),
  }),
});

export const { useGetCharacterQuery, useGetArrayCharacterQuery } = detailsSlice;
