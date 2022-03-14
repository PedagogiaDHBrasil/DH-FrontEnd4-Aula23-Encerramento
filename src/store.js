import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { rickMortyApi } from './service/rickMorty';

export const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickMortyApi.middleware),
});

setupListeners(store.dispatch);
