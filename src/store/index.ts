import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { resetSystem, sysmtemSlice, themeSwitch } from "./Slices/System";
import { GamesAPI, useGetAllGamesQuery } from "./API/GamesAPI";
import { useGetAllPlatformsQuery, PlatformAPI } from "./API/PlatformAPI";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystem = persistReducer(persistConfig, sysmtemSlice.reducer);

export const store = configureStore({
  reducer: {
    [GamesAPI.reducerPath]: GamesAPI.reducer,
    [PlatformAPI.reducerPath]: PlatformAPI.reducer,
    system: persistedSystem,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GamesAPI.middleware, PlatformAPI.middleware),
});

export const persistedStore = persistStore(store);

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
