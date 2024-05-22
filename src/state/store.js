import {applyMiddleware} from 'redux'
import { createStore } from 'redux'
import {thunk} from 'redux-thunk'
import reducers from './reducers'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig={
    key:'persist-store',
    storage,
    blacklist:['reducerData',]
}
const persistedReducer = persistReducer(persistConfig,reducers)

const store = createStore( persistedReducer,applyMiddleware(thunk));
export default store;