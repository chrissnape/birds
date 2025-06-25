import { configureStore } from '@reduxjs/toolkit'
import { birdsApi } from '../services/api/api'

export const store = configureStore({
  reducer: {
    [birdsApi.reducerPath]: birdsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(birdsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
