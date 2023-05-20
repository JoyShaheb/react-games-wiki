import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { resetSystem, sysmtemSlice, themeSwitch } from "./Slices/System";
import { GamesAPI, useGetAllGamesQuery } from "./API/GamesAPI";
import { useGetAllPlatformsQuery, PlatformAPI } from "./API/PlatformAPI";

export const store = configureStore({
  reducer: {
    [GamesAPI.reducerPath]: GamesAPI.reducer,
    [PlatformAPI.reducerPath]: PlatformAPI.reducer,
    system: sysmtemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GamesAPI.middleware, PlatformAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export {
  // system actions
  resetSystem,
  themeSwitch,

  // Games API
  useGetAllGamesQuery,

  // Platform API
  useGetAllPlatformsQuery,
};
