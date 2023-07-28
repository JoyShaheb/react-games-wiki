import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGamesResponse } from "../../types/games.interface";

const key = import.meta.env.VITE_APP_RAWG_GAMES_API_KEY as string;

interface IQueryProps {
  page: number;
  page_size: number;
  search: string;
}

export const GamesAPI = createApi({
  reducerPath: "GamesAPI",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/games" }),
  endpoints: (builder) => ({
    getAllGames: builder.query<IGamesResponse, IQueryProps>({
      query: ({ page, page_size, search }) =>
        `?key=${key}&page=${page}&page_size=${page_size}&search=${search}`,
      providesTags: ["Games"],
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        // const { search } = result?.arg || {};
        // if (search !== "") {
        //   return newItems;
        // } else {
        // }
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetAllGamesQuery } = GamesAPI;
