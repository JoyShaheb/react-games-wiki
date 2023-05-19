import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGamesResponse } from "../../types/games.interface";

export const GamesAPI = createApi({
  reducerPath: "GamesAPI",
  tagTypes: ["Games"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/games" }),
  endpoints: (builder) => ({
    getAllGames: builder.query<IGamesResponse, undefined>({
      query: () => `?key=8f08ec8a495d4d748e7505aac6c0b971`,
      providesTags: ["Games"],
    }),
  }),
});

export const { useGetAllGamesQuery } = GamesAPI;
