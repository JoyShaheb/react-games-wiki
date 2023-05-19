import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGamesResponse } from "../../types/games.interface";

export const GamesAPI = createApi({
  reducerPath: "GamesAPI",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/games" }),
  endpoints: (builder) => ({
    getAllGames: builder.query<IGamesResponse, undefined>({
      query: () => `?key=${import.meta.env.VITE_APP_RAWG_GAMES_API_KEY}`,
      providesTags: ["Games"],
    }),
  }),
});

export const { useGetAllGamesQuery } = GamesAPI;
