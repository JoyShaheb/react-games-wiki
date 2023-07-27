import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGamesResponse } from "../../types/games.interface";

const key = import.meta.env.VITE_APP_RAWG_GAMES_API_KEY as string;

export const GamesAPI = createApi({
  reducerPath: "GamesAPI",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/games" }),
  endpoints: (builder) => ({
    getAllGames: builder.query<
      IGamesResponse,
      {
        page: number;
        page_size: number;
      }
    >({
      query: ({ page, page_size }) =>
        `?key=${key}&page=${page}&page_size=${page_size}`,
      providesTags: ["Games"],
    }),
  }),
});

export const { useGetAllGamesQuery } = GamesAPI;
