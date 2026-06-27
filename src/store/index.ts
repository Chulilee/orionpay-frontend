import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const rootReducer = {
  counter: counterReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  // Redux DevTools are automatically enabled in development mode with RTK
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;