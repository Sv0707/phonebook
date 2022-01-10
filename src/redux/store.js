import contactsReducer from "./contacts/contactsReducer";
import { configureStore } from "@reduxjs/toolkit";
import { 
  persistStore,
  persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
    import storage from 'redux-persist/lib/storage';
    import { authReducer } from '../redux/authorization';

    const authPersistConfig = {
      key: 'auth',
      storage,
      whitelist: ['token'],
    };

const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }}),
    devTools: process.env.NODE_ENV !== 'production',
})

const persistor = persistStore(store);

export { store, persistor };