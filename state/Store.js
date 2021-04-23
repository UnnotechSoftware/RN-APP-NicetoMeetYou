import {createStore, combineReducers} from 'redux';
import reducer from './Reducer';

const bookReducer = combineReducers({
  bookReducer: reducer
})

const store = createStore(bookReducer);

export default store;