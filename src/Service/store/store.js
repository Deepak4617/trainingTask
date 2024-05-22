import { configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import rootReducers from '../slices/reducer'
import storage from 'redux-persist/lib/storage'
import { thunk } from 'redux-thunk'

const persistConfig = {
    key: 'persist-store',
    storage,
    blacklist: ['products']
    // whitelist:['products']
}
const persistedReducer = persistReducer(persistConfig,rootReducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([thunk])
        

})

