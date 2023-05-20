import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPlatformResponse } from "../../types/platform.interface";

export const PlatformAPI = createApi({
  reducerPath: "PlatformAPI",
  tagTypes: ["Platforms"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/platforms" }),
  endpoints: (builder) => ({
    getAllPlatforms: builder.query<IPlatformResponse, undefined>({
      query: () =>
        `?key=${import.meta.env.VITE_APP_RAWG_GAMES_API_KEY}&page_size=15`,
      providesTags: ["Platforms"],
    }),
  }),
});

export const { useGetAllPlatformsQuery } = PlatformAPI;
