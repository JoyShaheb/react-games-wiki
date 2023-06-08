import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { resetSystem, sysmtemSlice, themeSwitch } from "./Slices/System";
import { GamesAPI, useGetAllGamesQuery } from "./API/GamesAPI";
import { useGetAllPlatformsQuery, PlatformAPI } from "./API/PlatformAPI";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const persistedSystemReducer = persistReducer(
  persistConfig,
  sysmtemSlice.reducer
);

export const store = configureStore({
  reducer: {
    [GamesAPI.reducerPath]: GamesAPI.reducer,
    [PlatformAPI.reducerPath]: PlatformAPI.reducer,
    system: persistedSystemReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(GamesAPI.middleware, PlatformAPI.middleware),
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
