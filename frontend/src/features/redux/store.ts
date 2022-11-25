import { createStore, combineReducers } from 'redux';
// import { userReducer } from '../auth/userReducer';
import  {questionReducer} from './questionReducer';
import { userReducer } from './userReducer';

const store = createStore(
  combineReducers({
    questionState: questionReducer,
    userState: userReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;