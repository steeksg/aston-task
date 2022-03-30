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

export interface IFilterCharacter {
  name: string;
  species?: string;
  gender?: string;
  status?: string;
}

export interface IFilterCharacterList {
  species: string[];
  gender: string[];
  status: string[];
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
        return responseData.results;
      },
    }),
    getAllFilters: builder.query<IFilterCharacterList, void>({
      query: () => "/character",
      transformResponse: (responseData: IResponse) => {
        let speciesSet = new Set<string>();
        let genderSet = new Set<string>();
        let statusSet = new Set<string>();

        responseData.results.map((i) => {
          speciesSet.add(i.species);
          genderSet.add(i.gender);
          statusSet.add(i.status);
        });

        return {
          species: Array.from(speciesSet),
          gender: Array.from(genderSet),
          status: Array.from(statusSet),
        };
      },
    }),
    searchCharacter: builder.query<ICharacter[], IFilterCharacter>({
      query: (filter: IFilterCharacter) =>
        `/character/?name=${filter.name}${
          filter.species ? "&species=" + filter.species : ""
        }${filter.gender ? "&gender=" + filter.gender : ""}${
          filter.status ? "&status=" + filter.status : ""
        }
        `,
      transformResponse: (responseData: IResponse) => {
        return responseData.results;
      },
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useSearchCharacterQuery,
  useGetAllFiltersQuery,
} = apiSlice;
