import { configureStore } from '@reduxjs/toolkit'
import { chatApi } from './lib/api'
import activeConvSlice from './slices/ActiveConvSlice'

export const store = configureStore({
  reducer: {
    activeConv: activeConvSlice,
    [chatApi.reducerPath]: chatApi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatApi.middleware),
})