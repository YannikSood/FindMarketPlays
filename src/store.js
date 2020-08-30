import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';
// import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
    // .concat(logger)
});

export const persistor = persistStore(store);
